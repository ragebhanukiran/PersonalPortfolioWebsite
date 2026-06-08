import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "ragebhanukiran@gmail.com",
    href: "mailto:ragebhanukiran@gmail.com"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/bhanu-kiran-rage-472368266/"
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com/ragebhanukiran"
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Resume",
    value: "View Resume",
    href: "#"
  }
];

// ============================================
// EmailJS Configuration
// Replace these with your actual EmailJS credentials:
// 1. Go to https://www.emailjs.com and sign up
// 2. Add Gmail service → copy Service ID
// 3. Create template with {{user_name}}, {{user_email}}, {{message}} → copy Template ID
// 4. Go to Account → API Keys → copy Public Key
// ============================================
const EMAILJS_SERVICE_ID = "service_ot0z6l6";
const EMAILJS_TEMPLATE_ID = "template_ygj4stm";
const EMAILJS_PUBLIC_KEY = "xu-ZAFTaQt-wdLlj9";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("user_name") as string;
    const email = formData.get("user_email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      toast({
        title: "⚠️ Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: name,
          from_name: name,
          user_email: email,
          from_email: email,
          reply_to: email,
          to_email: "ragebhanukiran@gmail.com",
          message: message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      toast({
        title: "✉️ Message Sent!",
        description: "Thank you! I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error: any) {
      console.error("EmailJS error:", error);
      toast({
        title: "❌ Failed to send",
        description: error?.text || "Something went wrong. Please email me directly at ragebhanukiran@gmail.com",
        variant: "destructive"
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 mc-section-alt z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-pixel text-lg md:text-xl mb-12 text-center text-mc-text">
            📬 Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-pixel text-[10px] text-mc-gold mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <span className="text-mc-diamond">{info.icon}</span>
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-minecraft text-lg text-mc-text-secondary hover:text-mc-gold transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="font-pixel text-[10px] text-mc-gold mb-6">Send Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-minecraft text-lg text-mc-text-secondary block mb-1">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full mc-slot p-3 font-minecraft text-lg text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-mc-gold"
                  />
                </div>
                <div>
                  <label className="font-minecraft text-lg text-mc-text-secondary block mb-1">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    className="w-full mc-slot p-3 font-minecraft text-lg text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-mc-gold"
                  />
                </div>
                <div>
                  <label className="font-minecraft text-lg text-mc-text-secondary block mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full mc-slot p-3 font-minecraft text-lg text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-mc-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="mc-btn w-full !text-xs disabled:opacity-50"
                >
                  {sending ? "⏳ Sending..." : "📨 Send Message"}
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

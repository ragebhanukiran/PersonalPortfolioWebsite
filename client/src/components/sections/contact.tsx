import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    href: "https://linkedin.com/in/bhanu-kiran-rage-472368266"
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-github-darker">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center">
                    <div className="text-github-blue mr-4">
                      {info.icon}
                    </div>
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-github-text-secondary hover:text-github-blue transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-github-text-secondary">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="bg-github-card border-github-border text-github-text placeholder:text-github-text-secondary focus:border-github-blue"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-github-text-secondary">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-github-card border-github-border text-github-text placeholder:text-github-text-secondary focus:border-github-blue"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-github-text-secondary">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Your message..."
                    className="bg-github-card border-github-border text-github-text placeholder:text-github-text-secondary focus:border-github-blue resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-github-blue text-github-dark hover:bg-blue-400"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

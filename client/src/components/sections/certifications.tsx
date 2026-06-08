import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "IBM Applied AI Developer",
    subtitle: "Professional certification covering AI tools and their usage",
    emoji: "🏆",
    link: "https://credentials.edx.org/credentials/83394c1947de43f584588fcf6f80dc84/"
  },
  {
    title: "AWS Cloud Practitioner",
    subtitle: "Amazon Web Services Cloud Practitioner certification",
    emoji: "☁️",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/329446858a0e4826b50938bb4f2d375b"
  }
];

export function Certifications() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 mc-section-alt z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-pixel text-lg md:text-xl mb-12 text-center text-mc-text">
            ✨ Certifications
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <FadeIn key={cert.title} delay={index * 0.1}>
                <div className="mc-card p-6 md:p-8 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{cert.emoji}</span>
                    <div>
                      <h3 className="font-pixel text-[10px] sm:text-xs text-mc-gold">{cert.title}</h3>
                      <p className="font-minecraft text-lg text-mc-text-secondary">{cert.subtitle}</p>
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mc-btn !text-[9px] inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Certificate
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Award, ExternalLink, Cloud } from "lucide-react";

const certifications = [
  {
    title: "IBM Applied AI Developer",
    subtitle: "Professional certification covering AI tools and their usage",
    icon: <Award className="h-8 w-8 text-github-blue" />,
    link: "https://credentials.edx.org/credentials/83394c1947de43f584588fcf6f80dc84/"
  },
  {
    title: "AWS Cloud Practitioner",
    subtitle: "Amazon Web Services Cloud Practitioner certification",
    icon: <Cloud className="h-8 w-8 text-github-green" />,
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/329446858a0e4826b50938bb4f2d375b"
  }
];

export function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-github-darker">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <FadeIn key={cert.title} delay={index * 0.1}>
                <Card className="bg-github-card border-github-border">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                        <p className="text-github-text-secondary">{cert.subtitle}</p>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-github-blue hover:text-blue-400" asChild>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

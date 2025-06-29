import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { ChevronRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-github-darker">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-github-text">Intern</h3>
                  <p className="text-github-blue font-medium">Defence Research and Development Organisation - DRDO</p>
                </div>
                <div className="text-github-text-secondary mt-2 md:mt-0 md:text-right">
                  <p>05/2025 - Present</p>
                  <p>Hyderabad, India</p>
                </div>
              </div>
              <p className="text-github-text-secondary mb-4">
                DRDO is India's top defence R&D organization, developing cutting-edge technologies for the Armed Forces.
              </p>
              <ul className="space-y-3 text-github-text-secondary">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-github-green mt-1 mr-3 flex-shrink-0" />
                  Pretrained two lightweight language models from scratch using custom datasets to analyze training behavior and loss trends.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-github-green mt-1 mr-3 flex-shrink-0" />
                  Set up basic training scripts, tracked loss and accuracy across epochs, and experimented with minor changes to improve performance.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-github-green mt-1 mr-3 flex-shrink-0" />
                  Managed version control and collaborative experiments using Hugging Face repositories and Git.
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

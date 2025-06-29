import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-github-darker">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-github-blue mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">IBM Professional Certification in Artificial Intelligence</h3>
                  <p className="text-github-text-secondary">Professional Certificate</p>
                </div>
              </div>
              <Button variant="link" className="p-0 h-auto text-github-blue hover:text-blue-400">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Certificate
              </Button>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

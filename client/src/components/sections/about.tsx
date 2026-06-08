import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-github-text-secondary mb-6">
                I'm Rage BhanuKiran, a Computer Science student at VIT-AP (CGPA: 9.05) passionate about AI engineering. 
                I specialize in building end-to-end LLM pipelines using Retrieval-Augmented Generation (RAG), NL2SQL systems, 
                and computer vision models. I actively participate in competitive programming with strong rankings on LeetCode and HackerRank.
              </p>
              <p className="text-lg leading-relaxed text-github-text-secondary">
                Currently, I'm working as an AI Engineer Intern at PharmaACE, architecting RAG pipelines and building NL2SQL 
                systems for clinical data. Previously, I interned at DRDO where I pre-trained a custom Small Language Model 
                from scratch on a scientific corpus.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "PharmaACE",
    period: "Jan 2026 - Present",
    location: "Pune, India",
    description: "PharmaACE is a healthcare analytics company leveraging AI for pharmaceutical insights.",
    responsibilities: [
      "Architecting end-to-end LLM pipelines using Retrieval-Augmented Generation (RAG).",
      "Built and deployed an NL2SQL pipeline in collaboration with cross-functional teams, tested against domain-specific clinical data to ensure accuracy and reliability.",
      "Generated insights from query results and created suitable charts and visualizations to represent data trends for stakeholders."
    ]
  },
  {
    title: "Research Intern",
    company: "Defence Research and Development Organisation (DRDO)",
    period: "May 2025 - Jul 2025",
    location: "Hyderabad, India",
    description: "DRDO is India's top defence R&D organization, developing cutting-edge technologies for the Armed Forces.",
    responsibilities: [
      "Pre-trained a custom Small Language Model (SLM) from scratch on a 50k-sample subset of the peS2o scientific corpus.",
      "Conducted systematic loss analysis across 50 training epochs, iterating on hyperparameters and tokenization strategies to improve model convergence and stability.",
      "Implemented full training pipeline using Hugging Face Transformers and PyTorch; delivered technical evaluation reports to senior research staff."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-github-darker">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.company} delay={index * 0.1}>
                <Card className="bg-github-card border-github-border">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-github-text">{exp.title}</h3>
                        <p className="text-github-blue font-medium">{exp.company}</p>
                      </div>
                      <div className="text-github-text-secondary mt-2 md:mt-0 md:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-github-text-secondary mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-3 text-github-text-secondary">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-github-green mt-1 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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

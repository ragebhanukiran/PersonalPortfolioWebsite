import { FadeIn } from "@/components/ui/fade-in";
import { PixelVillager } from "@/components/minecraft-scene";

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "PharmaACE",
    period: "Jan 2026 - Present",
    location: "Pune, India",
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
    responsibilities: [
      "Pre-trained a custom Small Language Model (SLM) from scratch on a 50k-sample subset of the peS2o scientific corpus.",
      "Conducted systematic loss analysis across 50 training epochs, iterating on hyperparameters and tokenization strategies to improve model convergence and stability.",
      "Implemented full training pipeline using Hugging Face Transformers and PyTorch; delivered technical evaluation reports to senior research staff."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 mc-section-alt z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-pixel text-lg md:text-xl mb-12 text-center text-mc-text">
            ⚔️ Work Experience
          </h2>
          <div className="flex gap-6 items-start">
            <div className="hidden md:flex flex-col items-center pt-8">
              <PixelVillager />
            </div>
            <div className="flex-1 space-y-8">
              {experiences.map((exp, index) => (
                <FadeIn key={exp.company} delay={index * 0.1}>
                  <div className="mc-card p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-pixel text-xs sm:text-sm text-mc-gold mb-1">{exp.title}</h3>
                        <p className="font-minecraft text-xl text-mc-accent-light">{exp.company}</p>
                      </div>
                      <div className="font-minecraft text-lg text-mc-text-secondary mt-2 md:mt-0 md:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 font-minecraft text-lg text-mc-text-secondary">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-mc-gold mr-3 mt-0.5">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 mc-section z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-pixel text-lg md:text-xl mb-12 text-center text-mc-text">
            📖 About Me
          </h2>
          <div className="mc-card p-6 md:p-8">
            <p className="font-minecraft text-xl leading-relaxed text-mc-text-secondary mb-6">
              I'm Rage BhanuKiran, a Computer Science student at VIT-AP (CGPA: 9.05) passionate about AI engineering.
              I specialize in building end-to-end LLM pipelines using Retrieval-Augmented Generation (RAG), NL2SQL systems,
              and computer vision models. I actively participate in competitive programming with strong rankings on LeetCode and HackerRank.
            </p>
            <p className="font-minecraft text-xl leading-relaxed text-mc-text-secondary">
              Currently, I'm working as an AI Engineer Intern at PharmaACE, architecting RAG pipelines and building NL2SQL
              systems for clinical data. Previously, I interned at DRDO where I pre-trained a custom Small Language Model
              from scratch on a scientific corpus.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

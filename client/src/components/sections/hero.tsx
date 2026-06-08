import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  const handleScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl mb-6 leading-relaxed">
            <span className="mc-gradient-text">Rage BhanuKiran</span>
          </h1>
          <p className="font-minecraft text-2xl md:text-3xl text-mc-text-secondary mb-3">
            ⚡ AI Engineer Intern · CS Student at VIT-AP
          </p>
          <p className="font-minecraft text-xl text-mc-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
            Building end-to-end LLM pipelines and RAG systems with hands-on experience in
            Generative AI, Computer Vision, and NLP. Currently at PharmaACE. 🐷
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleScrollTo("#projects")}
              className="mc-btn text-sm px-8 py-3"
            >
              ⛏️ View My Work
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="mc-btn text-sm px-8 py-3"
              style={{
                background: "linear-gradient(180deg, #4CAF50 0%, #388E3C 40%, #2E7D32 100%)",
                borderColor: "#66BB6A #2E7D32 #1B5E20 #4CAF50",
              }}
            >
              📬 Get In Touch
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

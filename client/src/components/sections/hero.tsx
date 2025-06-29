import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  const handleScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Rage BhanuKiran</span>
          </h1>
          <p className="text-xl md:text-2xl text-github-text-secondary mb-4">CS Student at VIT-AP</p>
          <p className="text-lg text-github-text-secondary mb-8 max-w-3xl mx-auto">
            Passionate about building deep learning and NLP models with hands-on experience in 
            real-time applications. Currently interning at DRDO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleScrollTo("#projects")}
              className="bg-github-blue text-github-dark hover:bg-blue-400 px-8 py-3"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => handleScrollTo("#contact")}
              className="border-github-border text-github-text hover:border-github-blue hover:text-github-blue px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Object Detection Model using YOLO",
    description: "Trained a YOLO model from scratch on a custom 3-class vehicle dataset. Achieved mAP@0.5 of 85.9%. Deployed as a REST API using FastAPI for real-time inference.",
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "FastAPI"],
    link: "https://huggingface.co/ragebhanukiran/Object_Detection_Model_Using_YOLO",
    linkText: "Hugging Face",
    linkIcon: <ExternalLink className="h-4 w-4" />,
    emoji: "🤖"
  },
  {
    title: "Face Recognition Attendance",
    description: "Built a real-time facial biometrics system using OpenCV. Automated Excel report generation pipeline, eliminating manual roll-call.",
    technologies: ["Python", "OpenCV", "Excel"],
    link: "https://github.com/ragebhanukiran/open-cv-based-face-recognition-system-main",
    linkText: "GitHub",
    linkIcon: <Github className="h-4 w-4" />,
    emoji: "👤"
  },
  {
    title: "GitHub Trending Scraper",
    description: "Web scraper using BeautifulSoup to extract top repositories from GitHub topics into analysis-ready CSV datasets.",
    technologies: ["Python", "Requests", "BeautifulSoup", "CSV"],
    link: "https://github.com/ragebhanukiran/Web-Scraping-Project",
    linkText: "GitHub",
    linkIcon: <Github className="h-4 w-4" />,
    emoji: "🔍"
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 mc-section z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-pixel text-lg md:text-xl mb-12 text-center text-mc-text">
            🔨 Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.1}>
                <div className="mc-card p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{project.emoji}</span>
                    <h3 className="font-pixel text-[10px] sm:text-xs text-mc-gold leading-relaxed">
                      {project.title}
                    </h3>
                  </div>
                  <p className="font-minecraft text-lg text-mc-text-secondary mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="mc-slot px-2 py-1 font-minecraft text-sm text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mc-btn !text-[9px] inline-flex items-center gap-2 w-fit"
                    style={{
                      background: "linear-gradient(180deg, #4CAF50 0%, #388E3C 40%, #2E7D32 100%)",
                      borderColor: "#66BB6A #2E7D32 #1B5E20 #4CAF50",
                    }}
                  >
                    {project.linkIcon}
                    {project.linkText}
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

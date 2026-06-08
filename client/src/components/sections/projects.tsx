import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink, Github } from "lucide-react";
import { FaRobot, FaUserCheck } from "react-icons/fa";

const projects = [
  {
    title: "Object Detection Model using YOLO",
    description: "Trained a YOLO model from scratch on a custom 3-class vehicle dataset (Car, Emergency Vehicle, Heavy Transport Vehicle). Achieved mAP@0.5 of 85.9% with class-wise F1 scores of 0.87, 0.84, and 0.83. Deployed as a REST API using FastAPI for real-time inference.",
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "FastAPI"],
    icon: <FaRobot className="h-6 w-6" />,
    link: "https://huggingface.co/ragebhanukiran/Object_Detection_Model_Using_YOLO",
    linkText: "Hugging Face Model",
    linkIcon: <ExternalLink className="h-4 w-4" />,
    color: "purple"
  },
  {
    title: "Face Recognition Attendance System",
    description: "Built a real-time facial biometrics system using OpenCV to automatically identify students and mark attendance, fully eliminating manual roll-call. Automated Excel report generation pipeline, reducing administrative data entry time.",
    technologies: ["Python", "OpenCV", "Excel"],
    icon: <FaUserCheck className="h-6 w-6" />,
    link: "https://github.com/ragebhanukiran/open-cv-based-face-recognition-system-main",
    linkText: "View Repository",
    linkIcon: <Github className="h-4 w-4" />,
    color: "green"
  },
  {
    title: "GitHub Trending Topics Repository Scraper",
    description: "Built a web scraper using BeautifulSoup and Requests to automate extraction of top repositories from GitHub topics pages. Collected and structured repository metadata (name, author, stars, URLs) into clean, analysis-ready CSV datasets.",
    technologies: ["Python", "Requests", "BeautifulSoup", "CSV"],
    icon: <Github className="h-6 w-6" />,
    link: "https://github.com/ragebhanukiran/Web-Scraping-Project",
    linkText: "View Repository",
    linkIcon: <Github className="h-4 w-4" />,
    color: "blue"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.1}>
                <Card className="bg-github-card border-github-border hover:border-github-blue transition-colors duration-200 group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className={`text-github-${project.color} mr-3`}>
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-github-text-secondary mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`bg-github-${project.color}/20 text-github-${project.color} hover:bg-github-${project.color}/30`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button
                      variant="link"
                      className={`justify-start p-0 h-auto text-github-${project.color} hover:text-${project.color}-400`}
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkIcon && <span className="mr-2">{project.linkIcon}</span>}
                        {project.linkText}
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

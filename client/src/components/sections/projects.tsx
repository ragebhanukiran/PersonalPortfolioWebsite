import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink, Github, Clock } from "lucide-react";
import { SiPython, SiOpenai } from "react-icons/si";
import { FaRobot, FaUserCheck } from "react-icons/fa";

const projects = [
  {
    title: "GitHub Topic Repository Scraper",
    description: "A data extraction tool using Python, Requests, BeautifulSoup, and CSV. Scrapes repository data from GitHub topic pages including usernames, repo names, stars, and URLs.",
    technologies: ["Python", "BeautifulSoup", "CSV"],
    icon: <Github className="h-6 w-6" />,
    link: "#",
    linkText: "View Repository",
    linkIcon: <Github className="h-4 w-4" />,
    color: "blue"
  },
  {
    title: "YOLO-Based Object Detection",
    description: "Custom object detection model trained on a vehicle dataset (car, emv, htv) using YOLO. Achieved mAP@0.5 of 85.9% with excellent class-wise F1 scores.",
    technologies: ["YOLO", "OpenCV", "Flask"],
    icon: <FaRobot className="h-6 w-6" />,
    link: "#",
    linkText: "Hugging Face Model",
    linkIcon: <ExternalLink className="h-4 w-4" />,
    color: "purple"
  },
  {
    title: "OpenCV Face Recognition System",
    description: "A real-time face recognition attendance system using OpenCV and Python. Uses face biometrics to identify students and automatically generates Excel attendance sheets.",
    technologies: ["Python", "OpenCV", "Excel"],
    icon: <FaUserCheck className="h-6 w-6" />,
    isComingSoon: true,
    color: "green"
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
                    
                    {project.isComingSoon ? (
                      <Button variant="ghost" disabled className="justify-start p-0 h-auto text-github-text-secondary">
                        <Clock className="h-4 w-4 mr-2" />
                        Coming Soon
                      </Button>
                    ) : (
                      <Button variant="link" className={`justify-start p-0 h-auto text-github-${project.color} hover:text-${project.color}-400`}>
                        {project.linkIcon && <span className="mr-2">{project.linkIcon}</span>}
                        {project.linkText}
                      </Button>
                    )}
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

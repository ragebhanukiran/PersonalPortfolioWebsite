import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Mail, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/ragebhanukiran",
    label: "GitHub"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/bhanu-kiran-rage-472368266",
    label: "LinkedIn"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:ragebhanukiran@gmail.com",
    label: "Email"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-github-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-github-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-github-text-secondary">&copy; 2024 Rage BhanuKiran. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-github-text-secondary hover:text-github-blue transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

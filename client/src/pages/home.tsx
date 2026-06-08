import { Github, Linkedin, Mail } from "lucide-react";
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
import { MinecraftScene, GrassDivider } from "@/components/minecraft-scene";

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/ragebhanukiran",
    label: "GitHub"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/bhanu-kiran-rage-472368266/",
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
    <div className="min-h-screen relative">
      {/* Background Scene (fixed, behind everything) */}
      <MinecraftScene />

      {/* Content */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <GrassDivider />
        <About />
        <GrassDivider />
        <Experience />
        <GrassDivider />
        <Projects />
        <GrassDivider />
        <Skills />
        <GrassDivider />
        <Education />
        <GrassDivider />
        <Certifications />
        <GrassDivider />
        <Achievements />
        <GrassDivider />
        <Contact />
      </main>
      
      {/* Footer — Bedrock Layer */}
      <footer className="relative z-10 py-10 px-4 sm:px-6 lg:px-8" style={{
        background: "repeating-linear-gradient(0deg, #333 0px, #333 4px, #2a2a2a 4px, #2a2a2a 8px, #444 8px, #444 12px, #2a2a2a 12px, #2a2a2a 16px)",
        borderTop: "4px solid var(--mc-border)"
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-minecraft text-lg text-gray-400">
                &copy; 2026 Rage BhanuKiran. All rights reserved. ⛏️
              </p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-mc-gold transition-colors duration-200"
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

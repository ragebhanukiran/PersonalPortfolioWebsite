import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { SiPython, SiPostgresql } from "react-icons/si";
import { FaJava, FaCode, FaProjectDiagram, FaDatabase, FaChartLine } from "react-icons/fa";

const skills = [
  {
    name: "Python",
  
    icon: <SiPython className="h-8 w-8" />
  },
  {
    name: "Java",
    
    icon: <FaJava className="h-8 w-8" />
  },
  {
    name: "R",
  
    icon: <FaChartLine className="h-8 w-8" />
  },
  {
    name: "OOP",
    
    icon: <FaCode className="h-8 w-8" />
  },
  {
    name: "DSA",
    
    icon: <FaProjectDiagram className="h-8 w-8" />
  },
  {
    name: "PostgreSQL",
  
    icon: <SiPostgresql className="h-8 w-8" />
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-github-darker">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <FadeIn key={skill.name} delay={index * 0.1}>
                <Card className="bg-github-card border-github-border hover:border-github-blue transition-colors duration-200">
                  <CardContent className="p-6 text-center">
                    <div className="text-github-blue mb-4 flex justify-center">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-github-text-secondary text-sm">{skill.description}</p>
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

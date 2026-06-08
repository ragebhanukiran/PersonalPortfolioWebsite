import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { SiPython, SiPostgresql, SiPytorch, SiOpencv, SiPandas, SiFastapi } from "react-icons/si";
import { FaJava, FaCode, FaProjectDiagram, FaBrain, FaAws, FaGitAlt, FaRobot } from "react-icons/fa";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <SiPython className="h-7 w-7" /> },
      { name: "Java", icon: <FaJava className="h-7 w-7" /> }
    ]
  },
  {
    category: "AI / ML",
    skills: [
      { name: "LLMs", icon: <FaBrain className="h-7 w-7" /> },
      { name: "RAG", icon: <FaRobot className="h-7 w-7" /> },
      { name: "Generative AI", icon: <FaBrain className="h-7 w-7" /> },
      { name: "Computer Vision", icon: <SiOpencv className="h-7 w-7" /> }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "LangChain", icon: <FaBrain className="h-7 w-7" /> },
      { name: "HF Transformers", icon: <FaRobot className="h-7 w-7" /> },
      { name: "OpenCV", icon: <SiOpencv className="h-7 w-7" /> },
      { name: "Pandas", icon: <SiPandas className="h-7 w-7" /> },
      { name: "FastAPI", icon: <SiFastapi className="h-7 w-7" /> },
      { name: "PyTorch", icon: <SiPytorch className="h-7 w-7" /> }
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="h-7 w-7" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="h-7 w-7" /> },
      { name: "AWS", icon: <FaAws className="h-7 w-7" /> }
    ]
  },
  {
    category: "CS Fundamentals",
    skills: [
      { name: "OOP", icon: <FaCode className="h-7 w-7" /> },
      { name: "DSA", icon: <FaProjectDiagram className="h-7 w-7" /> }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-github-darker">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="space-y-10">
            {skillCategories.map((cat, catIndex) => (
              <FadeIn key={cat.category} delay={catIndex * 0.1}>
                <div>
                  <h3 className="text-lg font-semibold text-github-blue mb-4 tracking-wide uppercase">
                    {cat.category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {cat.skills.map((skill) => (
                      <Card key={skill.name} className="bg-github-card border-github-border hover:border-github-blue transition-colors duration-200">
                        <CardContent className="p-4 text-center">
                          <div className="text-github-blue mb-3 flex justify-center">
                            {skill.icon}
                          </div>
                          <p className="text-sm font-medium text-github-text">{skill.name}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

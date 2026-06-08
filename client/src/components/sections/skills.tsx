import { FadeIn } from "@/components/ui/fade-in";

const skillCategories = [
  {
    category: "Languages",
    emoji: "⌨️",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" }
    ]
  },
  {
    category: "AI / ML",
    emoji: "🧠",
    skills: [
      { name: "LLMs", icon: "💬" },
      { name: "RAG", icon: "🔗" },
      { name: "Generative AI", icon: "✨" },
      { name: "Computer Vision", icon: "👁️" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    emoji: "📚",
    skills: [
      { name: "LangChain", icon: "🦜" },
      { name: "HF Transformers", icon: "🤗" },
      { name: "OpenCV", icon: "📷" },
      { name: "Pandas", icon: "🐼" },
      { name: "FastAPI", icon: "⚡" },
      { name: "PyTorch", icon: "🔥" }
    ]
  },
  {
    category: "Databases & Tools",
    emoji: "🛠️",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Git & GitHub", icon: "🔀" },
      { name: "AWS", icon: "☁️" }
    ]
  },
  {
    category: "CS Fundamentals",
    emoji: "🎓",
    skills: [
      { name: "OOP", icon: "🧱" },
      { name: "DSA", icon: "📊" }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 mc-section-alt z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-pixel text-lg md:text-xl mb-12 text-center text-mc-text">
            🎒 Inventory — Skills
          </h2>
          <div className="space-y-8">
            {skillCategories.map((cat, catIndex) => (
              <FadeIn key={cat.category} delay={catIndex * 0.08}>
                <div>
                  <h3 className="font-pixel text-[10px] sm:text-xs text-mc-gold mb-4">
                    {cat.emoji} {cat.category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="mc-slot p-3 text-center cursor-default hover:scale-105 transition-transform"
                      >
                        <div className="text-2xl mb-2">{skill.icon}</div>
                        <p className="font-minecraft text-sm text-gray-200">{skill.name}</p>
                      </div>
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

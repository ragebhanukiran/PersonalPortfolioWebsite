import { FadeIn } from "@/components/ui/fade-in";

const education = [
  {
    degree: "Bachelor Of Technology",
    institution: "Vellore Institute of Technology, Andhra Pradesh",
    period: "Oct 2022 - Present",
    grade: "CGPA: 9.05 / 10.0",
    field: "Computer Science Engineering"
  },
  {
    degree: "Intermediate Education",
    institution: "Sri Chaitanya Jr. College, Andhra Pradesh",
    period: "May 2020 - May 2022",
    grade: "93.5%",
    field: "State Board of Intermediate Education"
  }
];

export function Education() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 mc-section z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-pixel text-lg md:text-xl mb-12 text-center text-mc-text">
            🎓 Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <FadeIn key={edu.degree} delay={index * 0.1}>
                <div className="mc-card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="font-pixel text-[10px] sm:text-xs text-mc-gold mb-1">{edu.degree}</h3>
                      <p className="font-minecraft text-xl text-mc-accent-light">{edu.institution}</p>
                    </div>
                    <div className="font-minecraft text-lg text-mc-text-secondary mt-2 md:mt-0 md:text-right">
                      <p>{edu.period}</p>
                      <p className="text-mc-gold font-bold">{edu.grade}</p>
                    </div>
                  </div>
                  <p className="font-minecraft text-lg text-mc-text-secondary">{edu.field}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

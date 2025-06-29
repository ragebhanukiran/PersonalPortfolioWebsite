import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

const education = [
  {
    degree: "Bachelor Of Technology",
    institution: "Vellore Institute of Technology, Andhra Pradesh",
    period: "10/2022 - Present",
    grade: "9.01 CGPA",
    field: "Computer Science Engineering"
  },
  {
    degree: "Intermediate Education",
    institution: "Sri Chaitanya Jr. College, Andhra Pradesh",
    period: "05/2020 - 05/2022",
    grade: "93.5%",
    field: "State Board of Intermediate Education"
  }
];

export function Education() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <FadeIn key={edu.degree} delay={index * 0.1}>
                <Card className="bg-github-card border-github-border">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-github-text">{edu.degree}</h3>
                        <p className="text-github-blue font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-github-text-secondary mt-2 md:mt-0 md:text-right">
                        <p>{edu.period}</p>
                        <p className="text-github-green font-semibold">{edu.grade}</p>
                      </div>
                    </div>
                    <p className="text-github-text-secondary">{edu.field}</p>
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

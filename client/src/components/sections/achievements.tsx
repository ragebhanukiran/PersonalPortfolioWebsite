import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Code, Trophy, ExternalLink, Star } from "lucide-react";

const achievements = [
  {
    platform: "LeetCode",
    description: "Competitive Programming",
    stats: [
      { label: "Problems Solved", value: "250+" },
      { label: "Languages", value: "Python, Java" }
    ],
    icon: <Code className="h-8 w-8" />,
    color: "blue",
    link: "#"
  },
  {
    platform: "HackerRank",
    description: "Competitive Programming",
    stats: [
      { label: "Python", stars: 5 },
      { label: "Problem Solving", stars: 5 },
      { label: "Java", stars: 4 }
    ],
    icon: <Trophy className="h-8 w-8" />,
    color: "green",
    link: "#"
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count ? "text-github-green fill-current" : "text-github-text-secondary"
          }`}
        />
      ))}
    </div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <FadeIn key={achievement.platform} delay={index * 0.1}>
                <Card className="bg-github-card border-github-border hover:border-github-blue transition-colors duration-200">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`text-github-${achievement.color} mr-4`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">{achievement.platform}</h3>
                        <p className="text-github-text-secondary">{achievement.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {achievement.stats.map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between">
                          <span className="text-github-text-secondary">{stat.label}</span>
                          {'stars' in stat ? (
                            <StarRating count={stat.stars} />
                          ) : (
                            <span className={`text-2xl font-bold text-github-${achievement.color}`}>
                              {stat.value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="link" className={`p-0 h-auto text-github-${achievement.color} hover:text-${achievement.color}-400 mt-6`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Profile
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

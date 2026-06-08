import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink } from "lucide-react";

const achievements = [
  {
    platform: "LeetCode",
    description: "Competitive Programming",
    stats: [
      { label: "Problems Solved", value: "400+" },
      { label: "Languages", value: "Python, Java" }
    ],
    emoji: "💻",
    link: "https://leetcode.com/u/RAGE_BHANU_KIRAN/"
  },
  {
    platform: "HackerRank",
    description: "Competitive Programming",
    stats: [
      { label: "Python", stars: 5 },
      { label: "Problem Solving", stars: 5 },
      { label: "Java", stars: 4 }
    ],
    emoji: "🏆",
    link: "https://www.hackerrank.com/profile/ragebhanukiran"
  }
];

function McStars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`text-lg ${i < count ? "opacity-100" : "opacity-30"}`}
          style={i < count ? { animation: "xpGlow 2s ease-in-out infinite", animationDelay: `${i * 0.2}s` } : {}}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 mc-section-alt z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-pixel text-lg md:text-xl mb-12 text-center text-mc-text">
            🏅 Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <FadeIn key={achievement.platform} delay={index * 0.1}>
                <div className="mc-card p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl">{achievement.emoji}</span>
                    <div>
                      <h3 className="font-pixel text-xs sm:text-sm text-mc-gold">{achievement.platform}</h3>
                      <p className="font-minecraft text-lg text-mc-text-secondary">{achievement.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {achievement.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between">
                        <span className="font-minecraft text-lg text-mc-text-secondary">{stat.label}</span>
                        {'stars' in stat ? (
                          <McStars count={stat.stars} />
                        ) : (
                          <span className="font-pixel text-sm text-mc-diamond">{stat.value}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mc-btn !text-[9px] inline-flex items-center gap-2 mt-6"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Profile
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

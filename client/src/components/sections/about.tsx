import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-github-text-secondary mb-6">
                I'm Rage BhanuKiran, a passionate Computer Science student at VIT-AP. I enjoy building deep learning and NLP models, 
                and have experience in creating end-to-end object detection systems using YOLO and Faster R-CNN. I actively participate 
                in competitive programming and problem-solving, with strong rankings on platforms like LeetCode and HackerRank.
              </p>
              <p className="text-lg leading-relaxed text-github-text-secondary">
                My goal is to apply my skills in real-world applications and continually grow as a software engineer. Currently, 
                I'm gaining valuable experience as an intern at DRDO, where I work on cutting-edge technologies for defense applications.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

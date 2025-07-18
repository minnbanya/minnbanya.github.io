import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Deep Learning", "Neural Networks", "PyTorch", "TensorFlow", "Scikit-learn", "MLOps"]
    },
    {
      icon: Code,
      title: "Natural Language Processing",
      skills: ["Transformers", "BERT", "GPT", "Hugging Face", "spaCy", "NLTK"]
    },
    {
      icon: Zap,
      title: "Computer Vision",
      skills: ["OpenCV", "YOLO", "CNN", "Object Detection", "Image Segmentation", "OCR"]
    },
    {
      icon: Database,
      title: "Tools & Technologies",
      skills: ["Python", "Docker", "Kubernetes", "AWS", "Git", "Linux"]
    }
  ];

  return (
    <section className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-relaxed py-2">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building intelligent systems across multiple AI domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="text-sm text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2 border border-border/30"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
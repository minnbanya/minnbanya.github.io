import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-medium mb-4 text-muted-foreground">
            Minn Banya
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            AI Engineer
          </h2>
          <h3 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            Specializing in NLP, Computer Vision & Machine Learning
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building intelligent systems that understand and interact with the world. 
            From neural language models to computer vision pipelines, I create AI solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="hover:bg-primary/10 border-primary/20"
            >
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
            
            <div className="flex gap-4">
              <a href="https://github.com/minnbanya" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:bg-primary/10 border-primary/20">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/minn-banya-7b7924164" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:bg-primary/10 border-primary/20">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:minnbanya@gmail.com">
                <Button variant="outline" size="icon" className="hover:bg-primary/10 border-primary/20">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Tech stack showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto opacity-70">
            {['Python', 'PyTorch', 'TensorFlow', 'OpenCV'].map((tech) => (
              <div key={tech} className="flex items-center justify-center p-4 border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm">
                <span className="text-sm font-medium text-muted-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
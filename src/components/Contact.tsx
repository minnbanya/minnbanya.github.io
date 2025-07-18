import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 left-32 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-relaxed py-2">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in collaboration or have a project in mind? I'm always excited to work on 
            challenging AI problems and innovative solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">minnbanya@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Bangkok, Thailand</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Connect Online</h3>
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 hover:bg-primary/10 border-primary/20"
                    asChild
                  >
                    <a href="https://github.com/minnbanya" target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6 mr-4" />
                      <div className="text-left">
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">@minnbanya</p>
                      </div>
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 hover:bg-primary/10 border-primary/20"
                    asChild
                  >
                    <a href="https://linkedin.com/in/minn-banya-7b7924164" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6 mr-4" />
                      <div className="text-left">
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">/in/minn-banya-7b7924164</p>
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:minnbanya@gmail.com">
                Send me an email
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
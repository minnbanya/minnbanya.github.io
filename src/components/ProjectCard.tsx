import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const categoryColors = {
    ai: 'bg-primary/20 text-primary border-primary/30',
    nlp: 'bg-accent/20 text-accent border-accent/30',
    cv: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    ml: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    other: 'bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30'
  };

  return (
    <Card className="group bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {project.featured && (
            <Badge className="absolute top-3 right-3 bg-gradient-primary border-0">
              Featured
            </Badge>
          )}
          <Badge 
            className={`absolute top-3 left-3 ${categoryColors[project.category]} border`}
          >
            {project.category.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </CardDescription>
        
        <div className="space-y-3 mb-4">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.techStack.length - 4} more
              </Badge>
            )}
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs bg-primary/5 border-primary/20 text-primary">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20 text-primary">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex gap-3">
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 hover:bg-primary/10 border-primary/20"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 hover:bg-primary/10 border-primary/20"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
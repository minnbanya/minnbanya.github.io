import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects, Project } from "@/data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<'all' | Project['category']>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const categories = [
    { key: 'all' as const, label: 'All Projects' },
    { key: 'ai' as const, label: 'AI' },
    { key: 'nlp' as const, label: 'NLP' },
    { key: 'cv' as const, label: 'Computer Vision' },
    { key: 'ml' as const, label: 'Machine Learning' },
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const categoryMatch = filter === 'all' || project.category === filter;
    const searchMatch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const tagMatch = selectedTags.length === 0 || 
      selectedTags.every(tag => project.tags.includes(tag));
    
    return categoryMatch && searchMatch && tagMatch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setFilter('all');
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-relaxed py-2">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore my latest work in artificial intelligence, from neural networks to computer vision systems.
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-primary/20 focus:border-primary/40"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={filter === category.key ? "default" : "outline"}
                onClick={() => setFilter(category.key)}
                className={`transition-all duration-300 ${
                  filter === category.key 
                    ? 'bg-gradient-primary shadow-glow' 
                    : 'hover:bg-primary/10 border-primary/20'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <div className="flex flex-wrap justify-center gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-primary/10 border-primary/20'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Clear Filters */}
            {(searchQuery || selectedTags.length > 0 || filter !== 'all') && (
              <div className="text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
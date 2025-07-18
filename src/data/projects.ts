export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'ai' | 'nlp' | 'cv' | 'ml' | 'other';
  featured?: boolean;
}

// Example projects - replace with your actual projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'Smart Summarizer API',
    description: 'An end-to-end machine learning system for document summarization.',
    longDescription: 'End-to-end ML system for document summarization. Includes fine-tuning, REST API, CLI binary, Dockerized deployment, and CI/CD pipeline.',
    image: '/smart-summarizer.png',
    techStack: ['Python', 'PyTorch', 'Transformers', 'CUDA', 'Docker'],
    tags: [],
    githubUrl: 'https://github.com/minnbanya/smart-summarizer',
    liveUrl: 'https://minnbanya.github.io/smart-summarizer',
    category: 'nlp',
    featured: true
  },
  // {
  //   id: '2',
  //   title: 'Computer Vision Pipeline',
  //   description: 'Real-time object detection and segmentation system with custom CNN architecture optimized for edge deployment.',
  //   longDescription: 'Built an end-to-end computer vision pipeline featuring real-time object detection, instance segmentation, and tracking. Optimized for deployment on edge devices with quantization and pruning techniques.',
  //   image: '/api/placeholder/600/400',
  //   techStack: ['Python', 'OpenCV', 'TensorFlow', 'ONNX', 'C++'],
  //   tags: ['object-detection', 'segmentation', 'real-time', 'edge-computing', 'optimization'],
  //   githubUrl: 'https://github.com/yourusername/cv-pipeline',
  //   category: 'cv',
  //   featured: true
  // },
  // {
  //   id: '3',
  //   title: 'Multi-Modal AI Assistant',
  //   description: 'Intelligent assistant combining text, image, and audio processing for comprehensive human-computer interaction.',
  //   image: '/api/placeholder/600/400',
  //   techStack: ['Python', 'Hugging Face', 'Whisper', 'CLIP', 'FastAPI'],
  //   tags: ['multimodal', 'assistant', 'speech-recognition', 'vision-language', 'api'],
  //   githubUrl: 'https://github.com/yourusername/multimodal-assistant',
  //   category: 'ai',
  //   featured: false
  // },
  // {
  //   id: '4',
  //   title: 'Sentiment Analysis Engine',
  //   description: 'Fine-tuned BERT model for multi-language sentiment analysis with real-time processing capabilities.',
  //   image: '/api/placeholder/600/400',
  //   techStack: ['Python', 'BERT', 'scikit-learn', 'Flask', 'Redis'],
  //   tags: ['sentiment-analysis', 'bert', 'multilingual', 'real-time', 'fine-tuning'],
  //   githubUrl: 'https://github.com/yourusername/sentiment-engine',
  //   category: 'nlp',
  //   featured: false
  // }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
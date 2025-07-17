# AI Portfolio Website

A modern, dark-themed portfolio website for AI engineers specializing in NLP, Computer Vision, and Machine Learning. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Dark Theme Design**: Professional dark theme with gradient accents
- **Responsive Layout**: Looks great on all devices
- **Project Showcase**: Scalable project system with filtering
- **Smooth Animations**: Engaging hover effects and transitions
- **GitHub Pages Ready**: Optimized for static hosting

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development
- **Lucide React** for icons
- **shadcn/ui** components

## 🏃‍♂️ Running Locally

### Prerequisites
- Node.js 18+ and npm (install with [nvm](https://github.com/nvm-sh/nvm))

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <YOUR_REPO_URL>
   cd <PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8080`
   - The site will auto-reload when you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Customizing Your Portfolio

### Adding New Projects

Edit `src/data/projects.ts` to add your projects:

```typescript
{
  id: 'unique-id',
  title: 'Your Project Title',
  description: 'Brief description',
  image: '/path/to/image.jpg',
  techStack: ['Python', 'PyTorch', 'etc'],
  githubUrl: 'https://github.com/user/repo',
  liveUrl: 'https://demo-url.com', // optional
  category: 'ai' | 'nlp' | 'cv' | 'ml' | 'other',
  featured: true // optional
}
```

### Updating Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **Contact Info**: Update `src/components/Contact.tsx`
3. **Skills**: Modify `src/components/Skills.tsx`

### Customizing Colors & Design

The design system is defined in:
- `src/index.css` - CSS variables and colors
- `tailwind.config.ts` - Tailwind configuration

## 🌐 Deploying to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Select "GitHub Actions" as source

2. **Create workflow file**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Configure base path** (if needed)
   Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Add this line
     // ... rest of config
   })
   ```

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy dist folder**
   - Upload the `dist` folder contents to your GitHub Pages repository
   - Or use `gh-pages` package for automated deployment

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── Projects.tsx    # Project showcase
│   ├── ProjectCard.tsx # Individual project cards
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── data/
│   └── projects.ts     # Project data
├── pages/
│   └── Index.tsx       # Main page
└── index.css           # Global styles & design system
```

## 🎨 Design Features

- **Gradient Backgrounds**: Subtle animated gradients
- **Hover Effects**: Smooth transitions and glows
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Category Filtering**: Filter projects by AI domain
- **Semantic Design System**: Consistent colors and spacing

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactive elements
- Optimized typography scaling
- Efficient image loading

## 🤝 Contributing

Feel free to customize this portfolio template for your own use. The modular component structure makes it easy to add new sections or modify existing ones.

## 📄 License

This project is open source and available under the MIT License.

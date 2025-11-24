import { Navigation } from './Navigation';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

type Page = 'home' | 'school' | 'work' | 'projects';

interface ProjectsDetailProps {
  onNavigate: (page: Page) => void;
}

export function ProjectsDetail({ onNavigate }: ProjectsDetailProps) {
  const projects = [
    {
      title: 'AI Content Generator',
      category: 'Machine Learning',
      description: 'A tool that uses GPT models to generate high-quality content for blogs, social media, and marketing materials. Built with a focus on customization and brand voice consistency.',
      tech: ['Python', 'FastAPI', 'React', 'OpenAI API', 'PostgreSQL'],
      links: {
        demo: '#',
        github: '#'
      },
      featured: true
    },
    {
      title: 'Real-time Collaboration Tool',
      category: 'Web Application',
      description: 'A collaborative whiteboard application with real-time sync, allowing teams to brainstorm and design together. Features include drawing tools, sticky notes, and video chat integration.',
      tech: ['TypeScript', 'WebRTC', 'Socket.io', 'Canvas API', 'Node.js'],
      links: {
        demo: '#',
        github: '#'
      },
      featured: true
    },
    {
      title: 'Personal Finance Tracker',
      category: 'Mobile App',
      description: 'A mobile app for tracking expenses, setting budgets, and visualizing spending patterns. Includes automated categorization and financial insights.',
      tech: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      links: {
        demo: '#',
        github: '#'
      },
      featured: false
    },
    {
      title: 'Open Source UI Library',
      category: 'Development Tool',
      description: 'A collection of accessible, customizable React components with a focus on developer experience. Includes comprehensive documentation and examples.',
      tech: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
      links: {
        demo: '#',
        github: '#'
      },
      featured: false
    },
    {
      title: 'Weather Dashboard',
      category: 'Data Visualization',
      description: 'An interactive weather dashboard that displays current conditions, forecasts, and historical trends. Features beautiful visualizations and location-based alerts.',
      tech: ['Vue.js', 'D3.js', 'Weather API', 'Tailwind CSS'],
      links: {
        demo: '#',
        github: '#'
      },
      featured: false
    },
    {
      title: 'Task Automation Bot',
      category: 'Automation',
      description: 'A Discord bot that automates repetitive tasks, manages schedules, and integrates with various productivity tools. Used by 500+ servers.',
      tech: ['Python', 'Discord.py', 'MongoDB', 'Docker'],
      links: {
        demo: '#',
        github: '#'
      },
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={onNavigate} showBack />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm tracking-wider mb-6">
              PROJECTS
            </div>
            <h1 className="text-5xl md:text-7xl text-gray-900 mb-6">
              Things I've Built
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              A selection of side projects, experiments, and open-source contributions. 
              Each project represents learning, exploration, and a passion for creating.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-2xl text-gray-900 mb-8 flex items-center gap-2">
              <Code2 className="w-6 h-6" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-8 hover:border-gray-900 transition-colors group"
                >
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl text-gray-900 mb-8">More Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                  className="border border-gray-200 rounded-lg p-6 hover:border-gray-900 transition-colors"
                >
                  <div className="mb-3">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

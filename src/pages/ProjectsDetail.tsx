import { Navigation } from '../components/Navigation';
import { motion } from 'motion/react';
import { ExternalLink, Code2 } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../public/resumeinfo';

type Page = 'home' | 'school' | 'work' | 'projects';

interface ProjectsDetailProps {
  onNavigate: (page: Page) => void;
}

export function ProjectsDetail({ onNavigate }: ProjectsDetailProps) {
  const csProjects = projectData.filter(p => p.type == "CS_PROJECT");
  const personalProjects = projectData.filter(p => p.type == "PERSONAL_PROJECT");

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={onNavigate} onPage='projects' />

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
              A selection of side projects, experiments, and personal initatives. Each project took learning, passion,
              and grit to get it to the finish line.
            </p>
          </motion.div>

          {/* CS Projects */}
          <div className="mb-20">
            <h2 className="text-2xl text-gray-900 mb-8 flex items-center gap-2">
              <Code2 className="w-6 h-6" />
              CS Personal Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {csProjects.map((project, index) => (
                <ProjectCard project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl text-gray-900 mb-8">More Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <ProjectCard project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

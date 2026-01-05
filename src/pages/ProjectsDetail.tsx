import { Navigation } from '../components/Navigation';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

type Page = 'home' | 'school' | 'work' | 'projects';

interface ProjectsDetailProps {
  onNavigate: (page: Page) => void;
}

export function ProjectsDetail({ onNavigate }: ProjectsDetailProps) {
  const projects = [
    {
      title: 'HexEmpire',
      category: 'AI Enabled Python Game',
      description: 'A custom strategy board game between 4 players with objective-based tunable computer players written in PyGame with custom graphics.',
      tech: ['Python', 'FSM AI', 'PyGame'],
      links: [
        {
          href: 'https://github.com/liammoyn/hexempire',
          name: 'GitHub',
        }
      ],
      featured: true,
      type: 'CS_PROJECT',
    },
    {
      title: 'Minesweeper Bot',
      category: 'JavaScript Game Solver',
      description: 'A Minesweeper implementation with a visualized solving algorithm using constraint-satisfaction to deal optimally with uncertainty.',
      tech: ['TypeScript', 'React', 'CSP Solver'],
      links: [
        {
          href: 'https://github.com/liammoyn/minesweeperbot',
          name: 'GitHub',
        }
      ],
      featured: true,
      type: 'CS_PROJECT',
    },
    {
      title: 'Article Generator',
      category: 'Rails RAG App',
      description: 'A Ruby on Rails web app for generating articles with custom sources utilizing Chat GPT\'s API.',
      tech: ['Ruby', 'Rails', 'OpenAI API'],
      links: [
        {
          href: 'https://github.com/liammoyn/article-generator',
          name: 'GitHub',
        }
      ],
      featured: true,
      type: 'CS_PROJECT',
    },
    {
      title: 'This Website',
      category: 'React & Tailwind CSS App',
      description: 'A TypeScript React progressive web app with Tailwind CSS and Lucid React components.',
      tech: ['TypeScript', 'React', 'Tailwind CSS'],
      links: [
        {
          href: 'https://github.com/liammoyn/personal-website',
          name: 'GitHub',
        }
      ],
      featured: true,
      type: 'CS_PROJECT',
    },
    {
      title: 'LeetCode Scaffold',
      category: 'Python Coding Scaffold',
      description: 'A vanilla Python framework for completing and testing LeetCode style questions in a local environment.',
      tech: ['Python', 'Algorithms', 'PyTest'],
      links: [
        {
          href: 'https://github.com/liammoyn/leetcode-scaffold',
          name: 'GitHub',
        },
        {
          href: 'https://leetcode.com/u/liammoyn/',
          name: 'My LeetCode',
        }
      ],
      featured: true,
      type: 'CS_PROJECT',
    },
    {
      title: 'SmartPedal',
      category: 'React Native Mobile App',
      description: 'A React Native mobile app for controlling an embedded microcontroller for custom guitar pedals.',
      tech: ['JavaScript', 'React Native', 'Embedded Systems'],
      links: [
        {
          href: 'https://github.com/liammoyn/SmartPedal',
          name: 'GitHub',
        }
      ],
      featured: true,
      type: 'CS_PROJECT',
    },
    {
      title: 'TrustVector',
      category: 'Startup Consulting',
      description: 'Worked with pre-seed startup TrustVector to conduct user interviews and help define their product strategy.',
      tech: ['User Interviews', 'Product Strategy'],
      links: [
        {
          href: 'https://www.trustvector.ai/',
          name: 'Website',
        }
      ],
      featured: false,
      type: 'PERSONAL_PROJECT',
    },
    {
      title: 'Code4Community',
      category: 'Software Undergraduate Club',
      description: 'Founded and ran an undergraduate club developing full-stack software for non-profits in Boston.',
      tech: ['Full-Stack Development', 'Team Management'],
      links: [
        {
          href: 'https://www.c4cneu.com/',
          name: 'Website',
        }
      ],
      featured: false,
      type: 'PERSONAL_PROJECT',
    },
    {
      title: 'Microsoft TEALS',
      category: 'Teaching and Mentorship',
      description: 'Co-Taught a high school computer science class at O\'Dea High School in Seattle through the Microsoft TEALS program.',
      tech: ['Lecturing', 'Python', 'Scratch'],
      links: [
        {
          href: 'https://www.microsoft.com/en-us/teals',
          name: 'Website',
        }
      ],
      featured: false,
      type: 'PERSONAL_PROJECT',
    },
  ];

  const csProjects = projects.filter(p => p.type == "CS_PROJECT");
  const personalProjects = projects.filter(p => p.type == "PERSONAL_PROJECT");

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
                    {project.links.map((link, i) => (
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl text-gray-900 mb-8">More Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
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
                    {project.links.map((link, i) => (
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{link.name}</span>
                      </a>
                    ))}
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

import { ExternalLink } from 'lucide-react';
import { Project } from '../public/resumeinfo';

interface ProjectCard {
    project: Project,
    index: number
}

export default function ProjectCard({project, index}: ProjectCard) {

    return (
        <div
            key={index}
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
        </div>
    )
}
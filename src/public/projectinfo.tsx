import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { LeetCodeIcon } from '../components/icons/LeetCodeIcon';

export type ProjectType = 'CS_PROJECT' | 'PERSONAL_PROJECT'

export interface Project {
  title: string,
  category: string,
  description: string,
  tech: string[],
  links: {
    href: string,
    name: string,
    icon: React.ComponentType<{ className?: string }>,
  }[],
  featured: boolean,
  type: ProjectType,
}

export const projectData: Project[] = [
  {
    title: 'HexEmpire',
    category: 'AI Enabled Python Game',
    description: 'A custom strategy board game between 4 players with objective-based scalable computer players written in PyGame with custom graphics.',
    tech: ['Python', 'FSM AI', 'PyGame', '2D Graphics'],
    links: [
      {
        href: 'https://github.com/liammoyn/hexempire',
        name: 'GitHub',
        icon: GitHubIcon,
      }
    ],
    featured: true,
    type: 'CS_PROJECT',
  },
  {
    title: 'Minesweeper Bot',
    category: 'JavaScript Game Solver',
    description: 'A Minesweeper implementation with a visualized solver algorithm using constraint-satisfaction to deal with uncertainty optimally.',
    tech: ['TypeScript', 'React', 'CSP Solver'],
    links: [
      {
        href: 'https://github.com/liammoyn/minesweeperbot',
        name: 'GitHub',
        icon: GitHubIcon,
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
        icon: GitHubIcon,
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
        icon: GitHubIcon,
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
        icon: GitHubIcon,
      },
      {
        href: 'https://leetcode.com/u/liammoyn/',
        name: 'My LeetCode',
        icon: LeetCodeIcon,
      }
    ],
    featured: false,
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
        icon: GitHubIcon,
      }
    ],
    featured: false,
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
        icon: ExternalLink,
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
        icon: ExternalLink,
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
        icon: ExternalLink,
      }
    ],
    featured: false,
    type: 'PERSONAL_PROJECT',
  },
];

import { GraduationCap, BookOpen, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { LeetCodeIcon } from '../components/icons/LeetCodeIcon';

export type EducationType = 'MBA' | "UNDERGRAD"
export type ProjectType = 'CS_PROJECT' | 'PERSONAL_PROJECT'

export interface Education {
    icon: any,
    degree: string,
    school: string,
    period: string,
    description: string,
    achievements: string[],
    type: EducationType
}

export interface Experience {
    title: string,
    company: string,
    location: string,
    period: string,
    highlights: string[],
    skills: string[],
    during?: EducationType
}

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

export const educationData: Education[] = [
    {
        icon: GraduationCap,
        degree: 'Masters of Business Administration',
        school: 'The University of Chicago Booth School of Business',
        period: '2024 - 2026',
        description: 'Specialized in Entreprenuership, Strategic Management, and Applied AI.',
        achievements: [
            '1898 Scholarship Recipient',
            'Chair for Booth AI Group',
            'Student Mentor for Booth Technology Group',
        ],
        type: 'MBA',
    },
    {
        icon: BookOpen,
        degree: 'Bachelor of Science in Computer Engineering and Computer Science',
        school: 'Northeastern University',
        period: '2016 - 2021',
        description: 'Foundation in software engineering, algorithms, and system design.',
        achievements: [
            'Summa Cum Laude (GPA: 3.95/4.00)',
            'Northeastern Honor\s College',
            'Tau Beta Pi Engineering Honors Society',
        ],
        type: 'UNDERGRAD',
    }
];

export const experienceData: Experience[] = [
    {
        title: 'Technical Product Manager MBA Intern',
        company: 'Amazon Grocery',
        location: 'Austin, TX',
        period: '2025',
        highlights: [
            'Defined product and technical requirements while assessing third-party marketing technologies for Amazon Grocery, synthesizing cross-functional needs into a VP-backed recommendation impacting $200M+ in annual marketing spend',
            'Prioritized and triaged 200+ accessibility issues on wholefoods.com, coordinating engineering workstreams and implementing automated checks to prevent regression, avoiding $150K+ in potential ADA litigation and improving site accessibility',
        ],
        skills: ['Product Strategy', 'WCAG Accessibility', 'Cross-Team Alignment', 'Marketing Technology', 'B2B SaaS Procurement'],
        during: 'MBA',
    },
    {
        title: 'Software Development Engineer II',
        company: 'Amazon Web Services',
        location: 'Seattle, WA',
        period: '2023 - 2024',
        highlights: [
            'Led design and development of a distributed, asynchronous work execution system powering CloudWatch Application Signals, a full-stack observability platform, enabling 1M+ concurrent fault-tolerant work items at scale',
            'Owned the development of a shared frontend API across 3 development teams, identifying workflow pain points, creating development standards, and enforcing mechanisms to reduce integration friction and deliver efficient, robust software',
            'Projected customer usage patterns and analyzed software costs to design an intuitive pricing model with senior leadership for CloudWatch Application Signals, establishing a cost-following revenue structure compatible with multiple growth projections',
            'Provided technical mentorship through AWS\'s intern and onboarding programs, supporting 10 interns and 2 early-career engineers 1:1, being recognized as a key mentor in full-time hiring and promotion recommendations'
        ],
        skills: ['Distributed Systems', 'System Design', 'Kotlin', 'AWS Cloud', 'Software Architecture', 'Team Building', 'Mentorship'],
    },
    {
        title: 'Software Development Engineer I',
        company: 'Amazon Web Services',
        location: 'Seattle, WA',
        period: '2022 - 2023',
        highlights: [
            'Launched, iterated, and maintained CloudWatch Evidently, a cloud-based A/B testing service, across multiple programming languages, technology stacks, and cross-service teams, scaling product to 10k monthly active users',
            'Conducted user research through weekly stakeholder syncs and 10+ customer interview, synthesizing insights into feature proposals and advocating for customer needs in roadmap discussions',
            'Designed and implemented features such as a free trial metering solution, an in-browser interactive client with complex data visualizations, and a high-throughput, fault tolerant, client-side evaluation agent, prioritizing for reliability and performance',
        ],
        skills: ['Full-Stack Web Development', 'Java', 'React', 'AWS Cloud', 'A/B Testing', 'User Research', 'Data Visualization'],
    },
    {
        title: 'Software Development Co-op',
        company: 'Harvard Catalyst at Harvard Medical School',
        location: 'Cambridge, MA',
        period: '2020',
        highlights: [
            'Developed end-to-end features in an agile software development lifecycle in conjunction with product managers for a new user interface of SHRINE, a tool to help researchers locate patient cohorts at national scale for clinical trial recruitment',
        ],
        skills: ['Full-Stack Web Development', 'React', 'Scala', 'Agile Practices', 'Healthcare Tech'],
        during: 'UNDERGRAD',
    },
    {
        title: 'Software Development Co-op',
        company: 'MineralTree',
        location: 'Cambrdige, MA',
        period: '2019',
        highlights: [
            'Designed and implemented 3 micro-services to help transition MineralTree, an AP automation software, from a monolithic tech stack to a modern and more performant architecture, reducing operating costs by 30%',
        ],
        skills: ['Microservice Development', 'Java', 'GraphQL', 'Architecture Transitions', 'API Design'],
        during: 'UNDERGRAD',
    },
];

export const projectData: Project[] = [
  {
    title: 'HexEmpire',
    category: 'AI Enabled Python Game',
    description: 'A custom strategy board game between 4 players with objective-based tunable computer players written in PyGame with custom graphics.',
    tech: ['Python', 'FSM AI', 'PyGame'],
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
    description: 'A Minesweeper implementation with a visualized solving algorithm using constraint-satisfaction to deal optimally with uncertainty.',
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
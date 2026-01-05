import { Navigation } from '../components/Navigation';
import { motion } from 'motion/react';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

type Page = 'home' | 'school' | 'work' | 'projects';

interface WorkDetailProps {
  onNavigate: (page: Page) => void;
}

export function WorkDetail({ onNavigate }: WorkDetailProps) {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of core platform features serving millions of users.',
      highlights: [
        'Led team of 5 engineers to rebuild authentication system, improving security and reducing login times by 40%',
        'Architected microservices infrastructure handling 10M+ daily requests',
        'Mentored junior developers and established code review best practices',
        'Reduced deployment time from 2 hours to 15 minutes through CI/CD optimization'
      ],
      skills: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes']
    },
    {
      title: 'Software Engineer',
      company: 'Startup Ventures',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Built full-stack features for a fast-growing SaaS platform.',
      highlights: [
        'Developed customer-facing dashboard used by 5000+ active users',
        'Implemented real-time collaboration features using WebSockets',
        'Optimized database queries resulting in 60% faster page load times',
        'Collaborated with design team to improve user experience'
      ],
      skills: ['Vue.js', 'Python', 'Django', 'Redis', 'MongoDB']
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Contributed to web applications for various clients.',
      highlights: [
        'Built responsive websites for 10+ clients across different industries',
        'Integrated third-party APIs and payment gateways',
        'Maintained and updated legacy codebases',
        'Participated in agile development processes'
      ],
      skills: ['JavaScript', 'HTML/CSS', 'PHP', 'WordPress', 'Git']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={onNavigate} onPage='work' />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm tracking-wider mb-6">
              EXPERIENCE
            </div>
            <h1 className="text-5xl md:text-7xl text-gray-900 mb-6">
              Professional Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              From startups to scale-ups, I've had the privilege of working with talented 
              teams to build products that make a difference.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-8 mb-20"
          >
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Briefcase className="w-8 h-8 text-gray-900 mx-auto mb-4" />
              <div className="text-4xl text-gray-900 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Users className="w-8 h-8 text-gray-900 mx-auto mb-4" />
              <div className="text-4xl text-gray-900 mb-2">3</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-gray-900 mx-auto mb-4" />
              <div className="text-4xl text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Projects Shipped</div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="border border-gray-200 p-8 rounded-lg hover:border-gray-900 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-lg text-gray-600">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-gray-500 whitespace-nowrap">{exp.period}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{exp.description}</p>
                
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

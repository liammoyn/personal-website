import { Navigation, Page } from '../components/Navigation';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { educationData } from '../public/resumeinfo'

interface SchoolDetailProps {
  onNavigate: (page: Page) => void;
}

export function SchoolDetail({ onNavigate }: SchoolDetailProps) {

  const courses = [
    'Advanced Algorithms',
    'Machine Learning',
    'Distributed Systems',
    'Computer Vision',
    'Natural Language Processing',
    'Software Architecture',
    'Database Systems',
    'Human-Computer Interaction'
  ];

  /**
   * I've spent my time at Booth taking classes in Strategic Management, Entreprenuership, and Applied AI.
   * I'm often asked about what I've learned through getting my MBA, so I've started a writing series detailing the
   * lessons I've learned from each of my classes and then applying those learnings to the broader technology space.
   */

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={onNavigate} onPage='school' />
      
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
              EDUCATION
            </div>
            <h1 className="text-5xl md:text-7xl text-gray-900 mb-6">
              Academic Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              My educational background laid the groundwork for critical thinking, 
              technical expertise, and a lifelong passion for learning.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-16 mb-20">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-gray-900 pl-8 py-4"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <edu.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl text-gray-900 mb-2">{edu.degree}</h3>
                        <p className="text-lg text-gray-600">{edu.school}</p>
                      </div>
                      <span className="text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{edu.description}</p>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-gray-900" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notable Coursework */}
          <div
            className="bg-gray-50 p-12 rounded-lg"
          >
            <h2 className="text-3xl text-gray-900 mb-8">Notable Coursework</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-white border border-gray-200 rounded text-gray-700 text-center"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

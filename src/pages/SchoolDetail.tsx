import { Navigation } from '../components/Navigation';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

type Page = 'home' | 'school' | 'work' | 'projects';

interface SchoolDetailProps {
  onNavigate: (page: Page) => void;
}

export function SchoolDetail({ onNavigate }: SchoolDetailProps) {
  const education = [
    {
      icon: GraduationCap,
      degree: 'Master of Science in Computer Science',
      school: 'University Name',
      year: '2020 - 2022',
      description: 'Specialized in Machine Learning and Artificial Intelligence. Thesis on neural network optimization.',
      achievements: [
        'GPA: 3.9/4.0',
        'Graduate Teaching Assistant',
        'Published research paper on deep learning'
      ]
    },
    {
      icon: BookOpen,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      year: '2016 - 2020',
      description: 'Foundation in software engineering, algorithms, and system design.',
      achievements: [
        'Summa Cum Laude',
        'Dean\'s List all semesters',
        'President of Computer Science Club'
      ]
    }
  ];

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
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                      <span className="text-gray-500">{edu.year}</span>
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
              </motion.div>
            ))}
          </div>

          {/* Notable Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { Navigation } from '../components/Navigation';
import { motion } from 'motion/react';
import { Briefcase, Users, TrendingUp, Award } from 'lucide-react';
import { Education, educationData, Experience, experienceData } from '../public/resumeinfo';

type Page = 'home' | 'school' | 'work' | 'projects';

interface WorkDetailProps {
  onNavigate: (page: Page) => void;
}

const educationCard = (edu: Education) => {
  return (
    <div
      className="pl-8 py-4"
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
  )
}

const workCard = (exp: Experience, index: number, isSubCard: boolean) => {
  const fullCardClass = "p-8 border border-gray-200rounded-lg hover:border-gray-900 transition-colors"
  const subCardClass = "px-8 py-4 ml-8 border border-gray-200rounded-lg hover:border-gray-900 transition-colors"
  return (
    <div
      key={index}
      className={isSubCard ? subCardClass : fullCardClass}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl text-gray-900 mb-1">{exp.title}</h3>
          <p className="text-lg text-gray-600">{exp.company} • {exp.location}</p>
        </div>
        <span className="text-gray-500 whitespace-nowrap">{exp.period}</span>
      </div>
      <div className="space-y-3 mb-6">
        {exp.highlights.map((highlight, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
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
    </div>

  )
}

export function WorkDetail({ onNavigate }: WorkDetailProps) {
  const section1 = {
    education: educationData.find(e => e.type == "MBA")!,
    jobs: experienceData.filter(e => e.during == "MBA")
  }
  const section2 = {
    education: null,
    jobs: experienceData.filter(e => !e.during)
  }
  const section3 = {
    education: educationData.find(e => e.type == "UNDERGRAD")!,
    jobs: experienceData.filter(e => e.during == "UNDERGRAD")
  }

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
            <div className='border-l-2 border-gray-900'>
              {educationCard(section1.education)}
              <div className='space-y-8'>
                {section1.jobs.map((exp, index) => workCard(exp, index, true))}
              </div>
            </div>
            <div className=''>
              <div className='space-y-8'>
                {section2.jobs.map((exp, index) => workCard(exp, index, false))}
              </div>
            </div>
            <div className='border-l-2 border-gray-900'>
              {educationCard(section3.education)}
              <div className='space-y-4'>
                {section3.jobs.map((exp, index) => workCard(exp, index, true))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

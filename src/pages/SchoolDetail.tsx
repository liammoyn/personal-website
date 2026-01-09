import { Navigation, Page } from '../components/Navigation';
import { motion } from 'motion/react';
import { ArticleSummary, coursesData } from '../public/writinginfo'

interface SchoolDetailProps {
  onNavigate: (page: Page) => void;
}

const articleCard = (article: ArticleSummary, index: number, onNavigate: any) => (
  <div
    key={index}
    className={`p-6 border border-gray-200 rounded-lg ${
      article.isFinished
        ? 'hover:border-gray-900 cursor-pointer transition-colors'
        : 'opacity-60 cursor-default'
    }`}
    onClick={() => onNavigate(article.page)}
  >
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-xl text-gray-900">{article.courseName}</h3>
      {article.isFinished
        ? <span className="text-sm text-gray-500">{article.wordCount} words</span>
        : <span className="text-sm text-gray-400 italic">Coming soon</span>
      }
    </div>
    <p className="text-gray-600 mb-4">{article.summary}</p>
    {article.deepDiveTopic && (
      <p className="text-sm text-gray-500">
        Deep dive: {article.deepDiveTopic}
      </p>
    )}
    {article.isFinished && (
      <div className="mt-4 text-gray-900 text-sm font-medium">
        Read article →
      </div>
    )}
  </div>
);

export function SchoolDetail({ onNavigate }: SchoolDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={onNavigate} onPage='writing' />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm tracking-wider mb-6">
              WRITING
            </div>
            <h1 className="text-5xl md:text-7xl text-gray-900 mb-6">
              Academic Writing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              I'm often asked about what I've learned through getting my MBA, so I've started a writing series detailing 
              my takeaways from each of my classes and applying those lessons to the broader technology space.
            </p>
          </motion.div>

          {/* Article Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {coursesData.map((article, index) => articleCard(article, index, onNavigate))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

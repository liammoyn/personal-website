import { ArrowLeft } from 'lucide-react';

type Page = 'home' | 'school' | 'work' | 'projects';

interface NavigationProps {
  onNavigate: (page: Page) => void;
  showBack?: boolean;
}

export function Navigation({ onNavigate, showBack = false }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {showBack ? (
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        ) : (
          <button onClick={() => onNavigate('home')} className="text-gray-900 tracking-wider">
            YOUR NAME
          </button>
        )}
        
        <div className="flex gap-8">
          <button
            onClick={() => onNavigate('school')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => onNavigate('work')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
}

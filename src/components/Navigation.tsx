import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export type Page = 'home' | 'writing' | 'work' | 'projects';

interface NavigationProps {
  onNavigate: (page: Page) => void;
  onPage: Page
}

export function Navigation({ onNavigate, onPage }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const defaultLinkStyle = "text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
  const thisPageLinkStyle = "text-gray-900 underline cursor-default"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {onPage != 'home' ? (
          <a
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Home</span>
          </a>
        ) : (
          <div/>
        )}
        
        <div className="flex gap-8">
          <a
            onClick={() => onNavigate('writing')}
            className={onPage == 'writing' ? thisPageLinkStyle : defaultLinkStyle}
          >
            Writing
          </a>
          <a
            onClick={() => onNavigate('work')}
            className={onPage == 'work' ? thisPageLinkStyle : defaultLinkStyle}
          >
            Experience
          </a>
          <a
            onClick={() => onNavigate('projects')}
            className={onPage == 'projects' ? thisPageLinkStyle : defaultLinkStyle}
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

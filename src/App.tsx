import { useState, useEffect } from 'react';
import { SchoolDetail } from './pages/SchoolDetail';
import { WorkDetail } from './pages/WorkDetail';
import { ProjectsDetail } from './pages/ProjectsDetail';
import { Page } from './components/Navigation';
import LandingPage from './pages/LandingPage';

function getPageFromPath(path: string): Page {
  const pathMap: Record<string, Page> = {
    '/': 'home',
    '/school': 'school',
    '/work': 'work',
    '/projects': 'projects',
  };
  return pathMap[path] || 'home';
}

function getPathFromPage(page: Page): string {
  return page === 'home' ? '/' : `/${page}`;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() =>
    getPageFromPath(window.location.pathname)
  );

  const handleNavigate = (page: Page) => {
    const path = getPathFromPage(page);
    window.history.pushState({ page }, '', path);
    setCurrentPage(page);
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || getPageFromPath(window.location.pathname);
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    window.history.replaceState({ page: currentPage }, '', getPathFromPage(currentPage));

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div>
      {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'school' && <SchoolDetail onNavigate={handleNavigate} />}
      {currentPage === 'work' && <WorkDetail onNavigate={handleNavigate} />}
      {currentPage === 'projects' && <ProjectsDetail onNavigate={handleNavigate} />}
    </div>
  );
}
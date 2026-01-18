import { useState, useEffect } from 'react';
import { WritingDetail } from './pages/WritingDetail';
import { WorkDetail } from './pages/WorkDetail';
import { ProjectsDetail } from './pages/ProjectsDetail';
import { Page } from './components/Navigation';
import LandingPage from './pages/LandingPage';
import CompStratArticle from './pages/articles/CompStratArticle';
import NPSArticle from './pages/articles/NPSArticle';

function getPageFromPath(path: string): Page {
  // Normalize path by removing trailing slash
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const pathMap: Record<string, Page> = {
    '/': 'home',
    '/writing': 'writing',
    '/work': 'work',
    '/projects': 'projects',
    '/competitive-strategy': 'competitive-strategy',
    '/new-products-services': 'new-products-services',
  };
  return pathMap[normalizedPath] || 'home';
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
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || getPageFromPath(window.location.pathname);
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    window.history.replaceState({ page: currentPage }, '', getPathFromPage(currentPage));

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div>
      {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'writing' && <WritingDetail onNavigate={handleNavigate} />}
      {currentPage === 'work' && <WorkDetail onNavigate={handleNavigate} />}
      {currentPage === 'projects' && <ProjectsDetail onNavigate={handleNavigate} />}
      {currentPage === 'competitive-strategy' && <CompStratArticle onNavigate={handleNavigate} />}
      {currentPage === 'new-products-services' && <NPSArticle onNavigate={handleNavigate} />}
    </div>
  );
}
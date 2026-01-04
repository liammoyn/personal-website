import { useState } from 'react';
import { SchoolDetail } from './pages/SchoolDetail';
import { WorkDetail } from './pages/WorkDetail';
import { ProjectsDetail } from './pages/ProjectsDetail';
import { Page } from './components/Navigation';
import LandingPage from './pages/LandingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div>
      {currentPage === 'home' && <LandingPage onNavigate={setCurrentPage} />}
      {currentPage === 'school' && <SchoolDetail onNavigate={setCurrentPage} />}
      {currentPage === 'work' && <WorkDetail onNavigate={setCurrentPage} />}
      {currentPage === 'projects' && <ProjectsDetail onNavigate={setCurrentPage} />}
    </div>
  );
}
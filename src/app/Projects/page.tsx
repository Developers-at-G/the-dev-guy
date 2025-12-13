import Navigation from '../Navigation/Navigation';
import { ProjectsList } from '../../components/sections/ProjectsList';

export const metadata = {
  title: 'Projects | Abdallah Amadou Gueye',
  description: 'A showcase of my recent projects and technical achievements',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProjectsList />
    </div>
  );
}


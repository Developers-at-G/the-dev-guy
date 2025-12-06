'use client';

import Navigation from '../Navigation/Navigation';
import { ProjectsList } from '../../components/sections/ProjectsList';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProjectsList />
    </div>
  );
}


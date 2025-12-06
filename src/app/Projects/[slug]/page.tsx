'use client';

import { useParams, notFound } from 'next/navigation';
import Navigation from '../../Navigation/Navigation';
import { projectsData } from '../../../data/projects';
import { ProjectDetail } from '../../../components/sections/ProjectDetail';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = projectsData.find(
    (p) => p.title.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProjectDetail project={project} />
    </div>
  );
}

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navigation from '../../Navigation/Navigation';
import { projectsData } from '../../../data/projects';
import { ProjectDetail } from '../../../components/sections/ProjectDetail';

// Generate static params for all projects at build time
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.title.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find(
    (p) => p.title.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  );

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.impacts?.join(', ') || project.problem || 'A project by Abdallah Amadou Gueye',
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
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

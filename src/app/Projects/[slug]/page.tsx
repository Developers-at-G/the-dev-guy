import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navigation from '../../Navigation/Navigation';
import { getProjectsData } from '../../../data/projects';
import { getTranslations } from '../../../lib/translations';
import { getProjectSlug } from '../../../utils/projects';
import { ProjectDetail } from '../../../components/sections/ProjectDetail';

// Generate static params for all projects at build time
export function generateStaticParams() {
  const translations = getTranslations('en');
  const projectsData = getProjectsData(translations);
  return projectsData.map((project) => ({
    slug: getProjectSlug(project.title),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const translations = getTranslations('en');
  const projectsData = getProjectsData(translations);
  const project = projectsData.find((p) => getProjectSlug(p.title) === slug);

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
  const translations = getTranslations('en');
  const projectsData = getProjectsData(translations);
  
  const project = projectsData.find((p) => getProjectSlug(p.title) === slug);

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

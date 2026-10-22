import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCaseStudy } from '@/data/case-studies';
import { CaseStudyView } from '@/components/case-studies/CaseStudyView';

const study = getCaseStudy('devtrackr');

export const metadata: Metadata = {
  title: study ? `${study.name} Case Study` : 'Case Study',
  description: study?.summary,
};

export default function DevTrackrCaseStudyPage() {
  if (!study) notFound();
  return <CaseStudyView study={study} />;
}

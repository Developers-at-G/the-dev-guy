'use client';
import React from 'react';
import { Button } from './ui/Button';
import { useLanguage } from '../app/context/LanguageContext';

interface ResumeDownloadProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  source?: string;
}

export function ResumeDownload({
  variant = 'primary',
  size = 'md',
  source = 'Unknown'
}: ResumeDownloadProps) {
  const { t } = useLanguage();

  const handleDownload = async () => {
    try {
      const resumeUrl = '/cv/resume.pdf';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Resume.pdf';
      link.target = '_blank';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log(`Resume downloaded from: ${source}`);
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open('/cv/resume.pdf', '_blank');
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      className="flex items-center gap-2"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      { t('Resume') }
    </Button>
  );
}

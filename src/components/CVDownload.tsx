import React from 'react';
import { Button } from './ui/Button';
import { useDownload } from '../hooks/useDownload';

interface CVDownloadProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const CVDownload: React.FC<CVDownloadProps> = ({ 
  className, 
  variant = 'outline',
  size = 'md'
}) => {
  const { download, isDownloading } = useDownload();

  const handleDownload = () => {
    console.log('Download button clicked - attempting to download CV');
    download('/cv/Resume.pdf', {
      filename: 'Abdallah_Amadou_Gueye_Resume.pdf',
      onSuccess: () => {
        console.log('CV downloaded successfully');
        // You could add a success toast here
      },
      onError: (error) => {
        console.error('Download failed:', error);
        alert('Download failed. Please try again or contact me directly.');
      }
    });
  };

  // Fallback: Simple link approach
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a 
        href="/cv/Resume.pdf" 
        download="Abdallah_Amadou_Gueye_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          className="mr-2 h-4 w-4" 
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
        Download CV
      </a>
    </Button>
  );
};

import { useCallback, useState } from 'react';

interface UseDownloadOptions {
  filename?: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const download = useCallback(async (
    url: string, 
    options: UseDownloadOptions = {}
  ) => {
    const { filename, onSuccess, onError } = options;
    
    try {
      setIsDownloading(true);
      
      // Try direct link approach first for better compatibility
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || 'download';
      link.target = '_blank';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Small delay to ensure download started
      setTimeout(() => {
        onSuccess?.();
      }, 100);
      
    } catch {
      // Fallback: Try fetch approach
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Download failed: ${response.status}`);
        }
        
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename || 'download';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        window.URL.revokeObjectURL(downloadUrl);
        
        onSuccess?.();
      } catch (fallbackError) {
        console.error('Both download methods failed:', fallbackError);
        onError?.(fallbackError as Error);
      }
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return { download, isDownloading };
};

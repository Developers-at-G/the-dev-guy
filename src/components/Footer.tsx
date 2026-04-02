'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Abdallah Amadou Gueye
        </p>
      </div>
    </footer>
  );
};

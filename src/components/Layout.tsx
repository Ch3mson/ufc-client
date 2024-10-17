'use client'
import React, { useState, useEffect } from 'react';
import { fetchLatestDate } from '@/app/actions/actions'
import Hero from './Hero';
import Progress from './progress'; // Import the Progress component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [latestDate, setLatestDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const date = await fetchLatestDate();
        setLatestDate(date);
      } catch (error) {
        console.error('Error fetching the latest date:', error);
        setLatestDate('Unknown');
      }

      // Simulate progress
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        setProgress(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200); // Short delay after reaching 100%
        }
      }, 50);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Progress value={progress} />;
  }

  return (
    <>
      <Hero latestDate={latestDate} />
      {children}
    </>
  );
}

export default Layout;

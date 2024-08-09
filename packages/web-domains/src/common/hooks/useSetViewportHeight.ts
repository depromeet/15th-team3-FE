'use client';

import { useEffect, useRef } from 'react';

export const useSetViewportHeight = () => {
  const heightRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleVisualViewportResize() {
      if (window.visualViewport && heightRef.current) {
        const currentVisualViewport = window.visualViewport.height;
        heightRef.current.style.height = `${currentVisualViewport}px`;
      }
    }

    handleVisualViewportResize();
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleVisualViewportResize);
    }

    return () => {
      window.visualViewport?.removeEventListener('resize', handleVisualViewportResize);
    };
  }, []);

  return {
    heightRef,
  };
};

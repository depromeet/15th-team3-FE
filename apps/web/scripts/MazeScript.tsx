'use client';

import { useEffect, useRef } from 'react';

export const MazeScript = () => {
  const timestampRef = useRef<string | null>(null);

  useEffect(() => {
    (() => {
      const { sessionStorage } = window;
      const apiKey = '25a6123e-63e8-48d5-b806-25c44a0f0c80';
      const scriptUrl = 'https://snippet.maze.co/maze-universal-loader.js';

      try {
        timestampRef.current = sessionStorage.getItem('maze-us');
      } catch (err) {
        console.error(err);
      }

      if (!timestampRef.current) {
        timestampRef.current = `${Date.now()}`;
        try {
          sessionStorage.setItem('maze-us', timestampRef.current ?? 'null');
        } catch (err) {
          console.error(err);
        }
      }

      const scriptElement = document.createElement('script');
      scriptElement.src = `${scriptUrl}?apiKey=${apiKey}`;
      scriptElement.async = true;
      document.head.appendChild(scriptElement);

      window.mazeUniversalSnippetApiKey = apiKey;
    })();
  }, []);

  return null;
};

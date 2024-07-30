import { RefObject, useEffect } from 'react';

export const useResizeObserver = (ref: RefObject<HTMLElement>, callback: (entry: ResizeObserverEntry) => void) => {
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        callback(entry);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback]);
};

import { useCallback, useEffect, useRef } from 'react';

export const useIntersect = ({
  onIntersect,
  options,
}: {
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
  options?: IntersectionObserverInit;
}) => {
  const targetRef = useRef<HTMLElement | null>(null);

  const callback = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry) {
        onIntersect(entry, observer);
      }
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!targetRef.current) {
      return;
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, callback, options]);

  return {
    targetRef,
  };
};

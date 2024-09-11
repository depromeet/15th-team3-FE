import { useEffect, useState } from 'react';

export const useSetTimeBoolean = (duration = 3000, initial = false) => {
  const [boolean, setBoolean] = useState(initial);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBoolean((prev) => !prev);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return boolean;
};

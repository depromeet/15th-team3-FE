/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/use-callback-ref/src/useCallbackRef.tsx#L7
 */
import { useEffect, useMemo, useRef } from 'react';

export const useCallbackRef = <T extends (...args: any[]) => any>(callback: T | undefined) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
};

import { useState, useLayoutEffect } from 'react';
import * as React from 'react';

// NOTE: react의 useId 불러오기 실수를 없애기 위해
const useReactId = (React as any)['useId'.toString()] || (() => undefined);
let count = 0;

const useId = (deterministicId?: string): string => {
  const [id, setId] = useState<string | undefined>(useReactId());
  useLayoutEffect(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `sambad-${id}` : '');
};

export { useId };

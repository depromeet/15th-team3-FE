import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useQueryString = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const addQueryString = useCallback(
    ({ key, value }: { key: string; value: string }) => {
      params.append(key, value);

      return params.toString();
    },
    [searchParams],
  );

  const updateQueryString = useCallback(
    ({ key, value }: { key: string; value: string }) => {
      params.set(key, value);

      return params.toString();
    },
    [searchParams],
  );

  return {
    addQueryString,
    updateQueryString,
  };
};

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useCustomSearchParams = () => {
  const router = useRouter();
  const _searchParams = useSearchParams();

  const searchParams = new URLSearchParams(_searchParams);

  const getCurrentQueryString = useCallback(() => {
    return searchParams;
  }, [searchParams]);

  const updateUrlParams = useCallback(
    (url: string, params: Record<string, any>) => {
      const currentParams = new URLSearchParams(searchParams.toString());
      Object.keys(params).forEach((key) => {
        if (params[key]) {
          currentParams.set(key, params[key]);
        } else {
          currentParams.delete(key);
        }
      });

      history.replaceState(null, '', `?${currentParams.toString()}`);
      router.push(`${url}?${currentParams.toString()}`);
    },
    [searchParams, router],
  );

  const getQueryStringObject = () => {
    const currentPramas = getCurrentQueryString();
    return Object.fromEntries(currentPramas.entries());
  };

  const addQueryString = (params: Record<string, any>) => {
    const currentParams = getCurrentQueryString();
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        currentParams.set(key, params[key]);
      } else {
        currentParams.delete(key);
      }
    });
    return currentParams;
  };

  return { getCurrentQueryString, getQueryStringObject, addQueryString, updateUrlParams };
};

export default useCustomSearchParams;

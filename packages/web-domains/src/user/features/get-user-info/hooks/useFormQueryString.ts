import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { StepType } from './../../../common/constants/step';

export const useFormQueryString = () => {
  const router = useRouter();
  const _searchParams = useSearchParams();
  const searchParams = new URLSearchParams(_searchParams);

  const getCurrentQueryString = useCallback(() => {
    return searchParams;
  }, [searchParams]);

  const updateUrlParams = useCallback(
    (step: StepType | string, params: Record<string, any>) => {
      const currentParams = new URLSearchParams(searchParams.toString());

      Object.keys(params).forEach((key) => {
        if (params[key]) {
          currentParams.set(key, params[key]);
        } else {
          currentParams.delete(key);
        }
      });

      history.replaceState(null, '', `?${currentParams.toString()}`);

      currentParams.set('step', step);
      router.push(`?${currentParams.toString()}`);
    },
    [searchParams, router],
  );

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

  const getQueryStringObject = () => {
    const currentPramas = getCurrentQueryString();
    return Object.fromEntries(currentPramas.entries());
  };

  return { updateUrlParams, getCurrentQueryString, addQueryString, getQueryStringObject };
};

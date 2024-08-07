import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export type QueryParams = Record<string, any>;
export type RouterActionType = 'PUSH' | 'REPLACE';

export const useQueryString = () => {
  // const router = useRouter();
  const _searchParams = useSearchParams();
  const searchParams = new URLSearchParams(_searchParams);

  const getCurrentQueryString = useCallback(() => {
    return searchParams;
  }, [searchParams]);

  // const routerActions = (params: QueryParams, option: RouterActionType) => {
  //   if (option === 'PUSH') {
  //     router.push(`?${params.toString()}`);
  //   }
  //   if (option === 'REPLACE') {
  //     router.replace(`?${params.toString()}`);
  //   }
  // };

  const addQueryString = (params: QueryParams) => {
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

  const delQueryString = (delKeys: string | string[]) => {
    const currentParams = getCurrentQueryString();
    if (typeof delKeys === 'string') {
      currentParams.delete(delKeys);
    }
    if (delKeys instanceof Array) {
      delKeys.forEach((key) => {
        currentParams.delete(key);
      });
    }
    return currentParams;
  };

  const getQueryStringObj = () => {
    const currentPramas = getCurrentQueryString();
    return Object.fromEntries(currentPramas.entries());
  };

  return { getCurrentQueryString, addQueryString, delQueryString, getQueryStringObj };
};

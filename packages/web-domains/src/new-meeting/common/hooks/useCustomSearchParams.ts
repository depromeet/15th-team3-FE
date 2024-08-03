import { useSearchParams } from 'next/navigation';

const useCustomSearchParams = () => {
  const _searchParams = useSearchParams();

  const searchParams = new URLSearchParams(_searchParams);

  const getSearchParamsObject = () => {
    return Object.fromEntries(searchParams.entries());
  };

  return { getSearchParamsObject };
};

export default useCustomSearchParams;

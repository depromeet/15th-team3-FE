import { UseQueryOptions } from '@tanstack/react-query';

declare global {
  type UseQueryOptionsExcludedQueryKey<T, K = T> = Omit<UseQueryOptions<T, unknown, K>, 'queryKey'>;
}

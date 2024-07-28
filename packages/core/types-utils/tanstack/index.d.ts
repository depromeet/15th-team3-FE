import { UseQueryOptions } from '@tanstack/react-query';

export type UseQueryOptionsExcludedQueryKey<T, K = T> = Omit<UseQueryOptions<T, unknown, K>, 'queryKey'>;

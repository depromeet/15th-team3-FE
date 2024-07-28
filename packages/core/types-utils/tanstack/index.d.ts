import { UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export type UseQueryOptionsExcludedQueryKey<T, K = T> = Omit<UseQueryOptions<T, unknown, K>, 'queryKey'>;

export type UseQueryOptionsWithAxios<T> = UseQueryOptions<AxiosResponse<T>, unknown, T>;

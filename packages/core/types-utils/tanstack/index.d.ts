import { UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export type UseQueryOptionsExcludedQueryKey<T> = Omit<UseQueryOptions<AxiosResponse<T>, unknown, T>, 'queryKey'>;

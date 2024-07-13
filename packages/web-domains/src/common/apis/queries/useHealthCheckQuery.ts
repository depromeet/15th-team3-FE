import { QueryClient, useQuery } from '@tanstack/react-query';

import { Http } from '../base.api';

const ping = () => Http.GET<any>('/actuator/health');

export const useHealthCheckQuery = () => {
  const { data } = useQuery({
    queryKey: ['health'],
    queryFn: ping,
  });

  return { data };
};

export const useHealthCheckPrefetchQuery = async () => {
  const queryClient = new QueryClient();

  const prefetchedData = await queryClient.prefetchQuery({
    queryKey: ['health'],
    queryFn: ping,
  });

  return {
    queryClient,
    prefetchedData,
  };
};

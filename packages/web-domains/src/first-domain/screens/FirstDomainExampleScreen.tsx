import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { checkAPI } from '../../common/apis/check.api';
import { FirstFeatureOfFirstDomainTestContainer } from '../features/containers/FirstFeatureOfFirstDomainTestContainer';

export const FirstDomainExampleScreen = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['health'],
    queryFn: async () => {
      return await checkAPI.Ping('');
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <h1>도메인 화면을 전체 담당 하는 컴포넌트입니다.</h1>
        <FirstFeatureOfFirstDomainTestContainer />
      </div>
    </HydrationBoundary>
  );
};

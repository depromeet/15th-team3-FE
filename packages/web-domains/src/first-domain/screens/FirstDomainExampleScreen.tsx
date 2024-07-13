import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { useHealthCheckPrefetchQuery } from '../../common/apis/queries/useHealthCheckQuery';
import { FirstFeatureOfFirstDomainTestContainer } from '../features/containers/FirstFeatureOfFirstDomainTestContainer';

export const FirstDomainExampleScreen = async () => {
  const { queryClient } = await useHealthCheckPrefetchQuery();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <h1>도메인 화면을 전체 담당 하는 컴포넌트입니다.</h1>
        <FirstFeatureOfFirstDomainTestContainer />
      </div>
    </HydrationBoundary>
  );
};

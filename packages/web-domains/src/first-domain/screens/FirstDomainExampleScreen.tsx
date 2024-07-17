import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { useHealthCheckPrefetchQuery } from '../../common/apis/queries/useHealthCheckQuery';
import { FirstFeatureOfFirstDomainTestContainer } from '../features/containers/FirstFeatureOfFirstDomainTestContainer';

export const FirstDomainExampleScreen = async () => {
  const { queryClient } = await useHealthCheckPrefetchQuery();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <FirstFeatureOfFirstDomainTestContainer />
      </div>
    </HydrationBoundary>
  );
};

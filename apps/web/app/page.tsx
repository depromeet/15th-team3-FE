import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { checkAPI } from '../../../packages/web-domains/src/common/apis/check.api';
import { FirstFeatureOfFirstDomainTestContainer } from '../../../packages/web-domains/src/first-domain/features/containers/FirstFeatureOfFirstDomainTestContainer';

import styles from './page.module.css';

export default async function FirstDomainExampleScreen() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['health'],
    queryFn: async () => {
      return await checkAPI.Ping('');
    },
  });

  return (
    <main className={styles.main}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div>
          <h1>도메인 화면을 전체 담당 하는 컴포넌트입니다.</h1>
          <FirstFeatureOfFirstDomainTestContainer />
        </div>
      </HydrationBoundary>{' '}
    </main>
  );
}

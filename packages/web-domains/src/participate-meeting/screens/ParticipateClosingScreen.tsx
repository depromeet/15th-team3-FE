import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import { ParticipateClosingContainer } from '../features/participate-meeting-closing/containers/ParticipateClosingContainer';

// SearchParams 받아오기
export const ParticipateClosingScreen = async () => {
  const { queryClient } = await getServerSideProps();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ParticipateClosingContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  // 초대 코드를 활용한 모임 정보
  return { queryClient };
};

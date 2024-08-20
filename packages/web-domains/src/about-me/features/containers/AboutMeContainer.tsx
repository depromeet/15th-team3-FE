'use client';

import { size } from '@sambad/sds/theme';

import { HobbyList, IntroduceBox } from '../components';
import { useGetMemberByParams } from '../hooks/useGetMemberByParams';

import { EmptyView } from '@/common/components';

export const AboutMeContainer = () => {
  const { data } = useGetMemberByParams();

  const hasNoInfo = !data?.hobbies.length && !data?.introduction.length;

  if (hasNoInfo) return <EmptyView title="아직 입력한 정보가 없어요" style={{ height: '300px' }} />;

  return (
    <section style={{ padding: `${size['4xs']} 0` }}>
      <HobbyList contents={data?.hobbies} />
      <IntroduceBox content={data?.introduction} />
    </section>
  );
};

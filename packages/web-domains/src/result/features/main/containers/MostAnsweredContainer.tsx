'use client';

import { useGetMostSelected } from '@/result/common/apis/queries/useGetMostSelected';
import { Section } from '@/result/common/components';

import { MostAnswered, CountByMemberList } from '../components';

import { BasePageParams } from './types';

export const MostAnsweredContainers = (params: BasePageParams) => {
  const { data } = useGetMostSelected(params);

  // NOTE: 홍길동님 외 N명 <- 에서 홍길동 자리에 위치시킬 이름
  const showName = data?.selectedMembers[0]?.name;

  return (
    <Section title="모임원들이 가장 많이 한 답변은?">
      <MostAnswered contents={data?.content} />
      <CountByMemberList showName={showName} count={data?.count} showCharacter />
    </Section>
  );
};

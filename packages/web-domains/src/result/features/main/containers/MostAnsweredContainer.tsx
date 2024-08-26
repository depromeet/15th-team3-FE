'use client';

import { useGetMostSelected } from '@/result/common/apis/queries/useGetMostSelected';
import { Section } from '@/result/common/components';
import { useConvertTypeParams } from '@/result/common/hooks/useConvertTypeParams';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MostAnswered, CountByMemberList } from '../components';

export const MostAnsweredContainers = () => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
  const { data } = useGetMostSelected({ meetingId, questionId });

  // NOTE: 홍길동님 외 N명 <- 에서 홍길동 자리에 위치시킬 이름
  const showName = data?.selectedMembers?.[0]?.name;
  const profileUrls = data?.selectedMembers?.map((member) => member.profileImageFileUrl);

  return (
    <Section title="모임원들이 가장 많이 한 답변은?">
      <MostAnswered contents={data?.content} />
      {data && showName && (
        <CountByMemberList
          showName={showName}
          count={data?.count}
          profileUrls={profileUrls}
          href={`/${meetingId}/question-result/${questionId}/answers/most-selected`}
        />
      )}
    </Section>
  );
};

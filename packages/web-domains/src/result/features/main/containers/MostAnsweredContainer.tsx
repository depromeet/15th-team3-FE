'use client';

import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { useGetMostSelected } from '@/result/common/apis/queries/useGetMostSelected';
import { Section } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MostAnswered, CountByMemberList } from '../components';

export const MostAnsweredContainers = (params: BaseParams) => {
  const { questionId } = params;
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;
  const { data } = useGetMostSelected({ meetingId, questionId });

  // NOTE: 홍길동님 외 N명 <- 에서 홍길동 자리에 위치시킬 이름
  const showName = data?.selectedMembers[0]?.name;
  const profileUrls = data?.selectedMembers.map((member) => member.profileImageFileUrl);

  return (
    <Section title="모임원들이 가장 많이 한 답변은?">
      <MostAnswered contents={data?.content} />
      <CountByMemberList
        showName={showName}
        count={data?.count}
        profileUrls={profileUrls}
        href={`/question-result/${questionId}/answers/most-selected`}
      />
    </Section>
  );
};

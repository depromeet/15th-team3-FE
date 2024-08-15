'use client';

import { size } from '@sambad/sds/theme';

import { useGetComments } from '@/result/common/apis/queries/useGetComments';
import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { Section } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

import { Comment } from '../components';

export const CommentListContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;
  const { data: comments } = useGetComments({ meetingId, questionId });

  if (!comments?.contents?.length) return null;

  return (
    <Section title="모임원들의 코멘트" style={{ marginTop: size['2xs'] }}>
      {comments?.contents?.map((comment) => {
        const { id, writer, content } = comment;
        return <Comment key={id} name={writer.name} imgUrl={writer.profileImageFileUrl} comment={content} />;
      })}
    </Section>
  );
};

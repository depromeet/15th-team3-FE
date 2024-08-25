'use client';

import { size } from '@sambad/sds/theme';

import { useGetComments } from '@/result/common/apis/queries/useGetComments';
import { Section } from '@/result/common/components';
import { useConvertTypeParams } from '@/result/common/hooks/useConvertTypeParams';
import { BaseParams } from '@/result/common/types/BaseParams';

import { Comment } from '../components';

export const CommentListContainer = () => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
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

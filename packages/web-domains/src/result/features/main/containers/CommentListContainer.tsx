'use client';

import { size } from '@sambad/sds/theme';

import { useGetComments } from '@/result/common/apis/queries/useGetComments';
import { Section } from '@/result/common/components';

import { Comment } from '../components';

import { BasePageParams } from './types';

export const CommentListContainer = (params: BasePageParams) => {
  const { data: comments } = useGetComments(params);

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

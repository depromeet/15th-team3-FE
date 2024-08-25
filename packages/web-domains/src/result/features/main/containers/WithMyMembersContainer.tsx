'use client';

import { colors, size } from '@sambad/sds/theme';
import { Fragment } from 'react/jsx-runtime';

import { useGetSameSelected } from '@/result/common/apis/queries/useGetSameSelected';
import { Section } from '@/result/common/components';
import { useConvertTypeParams } from '@/result/common/hooks/useConvertTypeParams';
import { BaseParams } from '@/result/common/types/BaseParams';

import { WithMeMembers } from '../components';

export const WithMyMembersContainers = () => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
  const { data } = useGetSameSelected({ meetingId, questionId });

  const answered = data?.content?.join(', ');

  // NOTE: 204로 아직 답변을 선택하지 않은 상태일 경우를 처리
  if (!data) return;

  return (
    <Section
      title={
        <>
          나와 같이 <span style={{ color: colors.primary500 }}>{answered}</span>을 선택한 모임원은?
        </>
      }
      style={{ marginTop: size['2xs'] }}
    >
      <WithMeMembers count={data?.count} members={data?.selectedMembers} />
    </Section>
  );
};

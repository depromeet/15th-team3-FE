'use client';

import { colors, size } from '@sambad/sds/theme';
import { Fragment } from 'react/jsx-runtime';

import { useGetSameSelected } from '@/result/common/apis/queries/useGetSameSelected';
import { Section } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

import { WithMeMembers } from '../components';

export const WithMyMembersContainers = (params: BaseParams) => {
  const { questionId } = params;
  const { data } = useGetSameSelected({ meetingId: 1, questionId });

  const answered = data?.content?.join(', ');
  const title =
    answered !== '' ? (
      <Fragment>
        나와 같이 <span style={{ color: colors.tertiary500 }}>{answered}</span>을 선택한 모임원은?
      </Fragment>
    ) : (
      '아직 선택하지 않았어요!'
    );

  return (
    <Section title={title} style={{ marginTop: size['2xs'] }}>
      <WithMeMembers count={data?.count} members={data?.selectedMembers} />
    </Section>
  );
};

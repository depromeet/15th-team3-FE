'use client';

import { colors, size } from '@sambad/sds/theme';
import { Fragment } from 'react/jsx-runtime';

import { useGetSameSelected } from '@/result/common/apis/queries/useGetSameSelected';
import { Section } from '@/result/common/components';

import { WithMeMembers } from '../components';

import { BasePageParams } from './types';

export const WithMyMembersContainers = (params: BasePageParams) => {
  const { data } = useGetSameSelected(params);

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

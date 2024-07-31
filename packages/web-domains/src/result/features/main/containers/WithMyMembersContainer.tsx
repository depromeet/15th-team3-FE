'use client';

import { size } from '@sambad/sds/theme';

import { useGetSameSelected } from '@/result/common/apis/queries/useGetSameSelected';
import { Section } from '@/result/common/components';

import { WithMeMembers } from '../components';

import { BasePageParams } from './types';

export const WithMyMembersContainers = (params: BasePageParams) => {
  const { data } = useGetSameSelected(params);

  const answered = data?.content?.join(', ');

  return (
    <Section title={`나와 같이 ${answered}을 선택한 모임원은?`} style={{ marginTop: size['2xs'] }}>
      <WithMeMembers count={data?.count} members={data?.selectedMembers} />
    </Section>
  );
};

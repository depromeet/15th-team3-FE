'use client';

import { Fragment } from 'react';

import { ActionBar } from '@/common/components/ActionBar/ActionBar';
import { useGetSameSelected } from '@/result/common/apis/queries/useGetSameSelected';
import { useConvertTypeParams } from '@/result/common/hooks/useConvertTypeParams';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MemberList } from '../components';

export const SelectedSameListContainer = () => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
  const { data } = useGetSameSelected({ meetingId, questionId });

  return (
    <Fragment>
      <ActionBar title="나와 같은 답을 한 모임원" />
      <MemberList members={data?.selectedMembers} />
    </Fragment>
  );
};

'use client';

import { Fragment } from 'react';

import { ActionBar } from '@/common/components/ActionBar/ActionBar';
import { useGetMostSelected } from '@/result/common/apis/queries/useGetMostSelected';
import { useConvertTypeParams } from '@/result/common/hooks/useConvertTypeParams';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MemberList } from '../components';

export const MostSelectedListContainer = () => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
  const { data } = useGetMostSelected({ meetingId, questionId });

  return (
    <Fragment>
      <ActionBar title="가장 많은 답을 한 모임원" />
      <MemberList members={data?.selectedMembers} />
    </Fragment>
  );
};

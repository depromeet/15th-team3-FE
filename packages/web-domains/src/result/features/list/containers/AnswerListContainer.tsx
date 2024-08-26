'use client';

import { Fragment } from 'react';

import { ActionBar } from '@/common/components/ActionBar/ActionBar';
import { useGetAnswers } from '@/result/common/apis/queries/useGetAnswers';
import { useConvertTypeParams } from '@/result/common/hooks/useConvertTypeParams';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MemberList } from '../components';

export const AnswerListContainer = () => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
  const { data } = useGetAnswers({ meetingId, questionId });

  return (
    <Fragment>
      <ActionBar title="참여 현황" />
      <MemberList members={data?.contents} />
    </Fragment>
  );
};

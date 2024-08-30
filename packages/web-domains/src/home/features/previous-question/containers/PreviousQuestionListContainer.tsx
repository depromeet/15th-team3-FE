'use client';

import { MutableRefObject } from 'react';

import { EmptyView } from '@/common/components';

import { ActionBar } from '../../../../common/components/ActionBar/ActionBar';
import { PreviousQuestionItem } from '../components/PreviousQuestion/PreviousQuestionItem';
import { PreviousQuestionList } from '../components/PreviousQuestion/PreviousQuestionList';
import { PreviousQuestionListContainerSkeleton } from '../components/Skeleton/PreviousQuestionListContainerSkeleton';
import { usePreviousQuestionListService } from '../services/usePreviousQuestionListService';

export const PreviousQuestionListContainer = () => {
  const { previousQuestionList, targetRef, meetingId, isLoading } = usePreviousQuestionListService();

  if (isLoading) {
    return (
      <>
        <ActionBar title="이전 질문" css={{ paddingTop: '8px' }} />
        <PreviousQuestionListContainerSkeleton />
      </>
    );
  }

  if (!previousQuestionList.length) {
    return (
      <>
        <ActionBar title="이전 질문" css={{ paddingTop: '8px' }} />
        <EmptyView title="이전 질문이 없어요!" style={{ height: '100vh' }} />
      </>
    );
  }

  return (
    <>
      <ActionBar title="이전 질문" css={{ paddingTop: '8px' }} />
      <PreviousQuestionList
        questionList={previousQuestionList}
        renderItem={(item) => (
          <PreviousQuestionItem key={item.meetingQuestionId} question={item} meetingId={meetingId} />
        )}
        ref={targetRef as MutableRefObject<HTMLDivElement>}
      />
    </>
  );
};

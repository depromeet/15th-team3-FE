'use client';

import { MutableRefObject } from 'react';

import { ActionBar } from '../../../../common/components/ActionBar/ActionBar';
import { PreviousQuestionList } from '../components/PreviousQuestion/PreviousQuestionList';
import { usePreviousQuestionListService } from '../services/usePreviousQuestionListService';

export const PreviousQuestionListContainer = () => {
  const { previousQuestionList, targetRef } = usePreviousQuestionListService();

  if (!previousQuestionList || !previousQuestionList.length) {
    return <ActionBar title="이전 질문" css={{ paddingTop: '8px' }} />;
  }

  return (
    <>
      <ActionBar title="이전 질문" css={{ paddingTop: '8px' }} />
      <PreviousQuestionList questionList={previousQuestionList} ref={targetRef as MutableRefObject<HTMLDivElement>} />
    </>
  );
};

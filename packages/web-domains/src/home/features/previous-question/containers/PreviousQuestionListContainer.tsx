'use client';

import { ActionBar } from '../../../../common/components/ActionBar/ActionBar';
import { PreviousQuestionList } from '../components/PreviousQuestion/PreviousQuestionList';
import { usePreviousQuestionListService } from '../services/usePreviousQuestionListService';

export const PreviousQuestionListContainer = () => {
  const { previousQuestionList } = usePreviousQuestionListService();

  if (!previousQuestionList || !previousQuestionList.content.length) {
    return null;
  }

  return (
    <>
      <ActionBar title="이전 질문" css={{ paddingTop: '8px' }} />
      <PreviousQuestionList questionList={previousQuestionList.content} />
    </>
  );
};

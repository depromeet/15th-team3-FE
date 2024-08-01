'use client';

import { AnswerQuestion } from '../components/AnswerQuestion';
import { BalanceQuestion } from '../components/BalanceQuestion';
import { CommentBottomSheet } from '../components/CommentBottomSheet';

export const AnswerQuestionContainer = () => {
  return (
    <section css={{ height: '100%' }}>
      <AnswerQuestion
        question={{
          content: {
            answers: [
              { answerId: 1, content: '부먹이지!' },
              { answerId: 2, content: '찍먹이지!' },
            ],
            questionId: 0,
            questionImageFileUrl: 'test',
            title: '탕수육 부먹 VS 찍먹',
          },
          meetingQuestionId: 0,
        }}
        answers={
          <BalanceQuestion
            answerOptionList={[
              { answerId: 1, content: '부먹이지!' },
              { answerId: 2, content: '찍먹이지!' },
            ]}
          />
        }
      />
      <CommentBottomSheet />
    </section>
  );
};

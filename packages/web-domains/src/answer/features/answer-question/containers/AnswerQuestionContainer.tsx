'use client';

import { Button } from '@sambad/sds/components';

import { AnswerOptions } from '../components/AnswerOptions';
import { AnswerQuestion } from '../components/AnswerQuestion';
import { CommentBottomSheet } from '../components/CommentBottomSheet';
import { useAnswerQuestionService } from '../services/useAnswerQuestionService';

export const AnswerQuestionContainer = () => {
  const { question, questionType, handleSubmitComment, handleSubmitAnswer, handleAnswerList } =
    useAnswerQuestionService();

  return (
    <section
      css={{
        position: 'relative',
      }}
    >
      <AnswerQuestion
        questionTitle={question?.title ?? ''}
        answers={
          <AnswerOptions
            questionType={questionType}
            answerOptionList={question?.answers ?? []}
            onChangeAnswer={handleAnswerList}
          />
        }
      />

      <CommentBottomSheet
        onCommentSubmit={handleSubmitComment}
        answerButton={
          <Button variant="primary" size="large" onClick={handleSubmitAnswer} css={{ cursor: 'pointer' }}>
            답변 보내기
          </Button>
        }
      />
    </section>
  );
};

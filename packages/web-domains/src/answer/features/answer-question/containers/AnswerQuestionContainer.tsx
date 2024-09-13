'use client';

import { AnswerButton } from '../../floating-button/components/AnswerButton';
import { AnswerOptions } from '../components/AnswerOptions';
import { AnswerQuestion } from '../components/AnswerQuestion';
import { useAnswerQuestionService } from '../services/useAnswerQuestionService';

export const AnswerQuestionContainer = () => {
  const { question, questionType, isNotAnswerd, moveToCommentPage, handleAnswerList } = useAnswerQuestionService();

  return (
    <section
      css={{
        position: 'relative',
        paddingBottom: '100px',
      }}
    >
      <AnswerQuestion
        qustionSubTitle={question?.subtitle?.length ? question.subtitle : '우리 모임원들은'}
        questionTitle={question?.title ?? ''}
        answers={
          <AnswerOptions
            questionType={questionType}
            answerOptionList={question?.answers ?? []}
            onChangeAnswer={handleAnswerList}
          />
        }
      />
      <AnswerButton disabled={isNotAnswerd} onClick={moveToCommentPage} />
    </section>
  );
};

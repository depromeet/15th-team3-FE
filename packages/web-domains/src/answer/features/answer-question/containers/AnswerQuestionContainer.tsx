'use client';

import { AnswerButton } from '../../floating-button/components/AnswerButton';
import { AnswerOptions } from '../components/AnswerOptions';
import { AnswerQuestion } from '../components/AnswerQuestion';
import { useAnswerQuestionService } from '../services/useAnswerQuestionService';

export const AnswerQuestionContainer = () => {
  const { question, questionType, isNotAnswerd, moveToCommentPage, handleAnswerList } = useAnswerQuestionService();

  const subTitle = question?.questionTitle?.subTitle ?? '우리 모임원들은';
  const mainTitle = question?.questionTitle?.mainTitle;
  const answers = question?.answers;

  return (
    <section
      css={{
        position: 'relative',
        paddingBottom: '100px',
      }}
    >
      <AnswerQuestion
        qustionSubTitle={subTitle}
        questionTitle={mainTitle ?? ''}
        answers={
          <AnswerOptions
            questionType={questionType}
            answerOptionList={answers ?? []}
            onChangeAnswer={handleAnswerList}
          />
        }
      />
      <AnswerButton disabled={isNotAnswerd} onClick={moveToCommentPage} />
    </section>
  );
};

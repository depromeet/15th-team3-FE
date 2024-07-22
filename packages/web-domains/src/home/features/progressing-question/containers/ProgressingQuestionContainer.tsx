'use client';

import { colors } from '@sambad/sds/theme';

import { GatherName } from '../components/GatherName/GatherName';
import { ActiveQuestion } from '../components/QuestionInfo/ActiveQuestion';
import { ProgressingQuestionInfo } from '../components/QuestionInfo/ProgressingQuestionInfo';
import { useProgressingQuestionService } from '../services/useProgressingQuestionService';

export const ProgressingQuestionContainer = () => {
  const { gatherName, progressingQuestion } = useProgressingQuestionService();

  return (
    <section css={{ width: '100%', backgroundColor: colors.primary100, padding: '0 20px' }}>
      <GatherName gatherName={gatherName} />
      <ProgressingQuestionInfo
        css={{ padding: '18px 0 20px;' }}
        renderQuestion={progressingQuestion ? <ActiveQuestion question={progressingQuestion} /> : <div></div>}
      />
    </section>
  );
};

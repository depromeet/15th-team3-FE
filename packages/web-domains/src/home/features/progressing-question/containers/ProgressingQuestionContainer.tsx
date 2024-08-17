'use client';

import { colors } from '@sambad/sds/theme';
import dayjs from 'dayjs';

import { GatherName } from '../components/GatherName/GatherName';
import { ActiveQuestion } from '../components/QuestionInfo/ActiveQuestion';
import { InActiveQuestion } from '../components/QuestionInfo/InActiveQuestion';
import { ProgressingQuestionInfo } from '../components/QuestionInfo/ProgressingQuestionInfo';
import { useProgressingQuestionService } from '../services/useProgressingQuestionService';

export const ProgressingQuestionContainer = () => {
  const { gatherName, progressingQuestion, myInfo } = useProgressingQuestionService();

  return (
    <section css={{ width: '100%', backgroundColor: colors.primary100, padding: '0 20px' }}>
      <GatherName gatherName={gatherName} profileImage={myInfo?.profileImageFileUrl} />
      {progressingQuestion && (
        <ProgressingQuestionInfo
          css={{ padding: '18px 0 20px;' }}
          renderQuestion={
            progressingQuestion.isQuestionRegistered ? (
              <ActiveQuestion question={progressingQuestion} />
            ) : (
              <InActiveQuestion
                targetMember={progressingQuestion.targetMember}
                time={dayjs(progressingQuestion.startTime).valueOf()}
              />
            )
          }
        />
      )}
    </section>
  );
};

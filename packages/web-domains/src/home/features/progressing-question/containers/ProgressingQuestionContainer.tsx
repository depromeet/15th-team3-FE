'use client';

import { colors } from '@sambad/sds/theme';
import dayjs from 'dayjs';

import { BottomSheet } from '@/home/common/components/BottomSheet/BottomSheet';

import { GatherName } from '../components/GatherName/GatherName';
import { ActiveQuestion } from '../components/QuestionInfo/ActiveQuestion';
import { InActiveQuestion } from '../components/QuestionInfo/InActiveQuestion';
import { ProgressingQuestionInfo } from '../components/QuestionInfo/ProgressingQuestionInfo';
import { useProgressingQuestionService } from '../services/useProgressingQuestionService';

export const ProgressingQuestionContainer = () => {
  const { isOpen, handleCloseBottomSheet, handleOpenBottmSheet, gatherName, progressingQuestion } =
    useProgressingQuestionService();

  return (
    <section css={{ width: '100%', backgroundColor: colors.primary100, padding: '0 20px' }}>
      <GatherName
        gatherName={gatherName}
        subTitle="릴레이질문으로 더 가까워져 볼까요?"
        onClick={handleOpenBottmSheet}
      />
      <BottomSheet title="모임 변경하기" isOpen={isOpen} onClose={handleCloseBottomSheet}>
        <div css={{ height: '500px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
      </BottomSheet>
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

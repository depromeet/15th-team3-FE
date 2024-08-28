'use client';

import { colors } from '@sambad/sds/theme';
import dayjs from 'dayjs';

import { MeetingChoiceBottomSheet } from '../../meeting-choice/components/MeetingChoiceBottomSheet';
import { GatherName } from '../components/GatherName/GatherName';
import { ActiveQuestion } from '../components/QuestionInfo/ActiveQuestion';
import { InActiveQuestion } from '../components/QuestionInfo/InActiveQuestion';
import { ProgressingQuestionInfo } from '../components/QuestionInfo/ProgressingQuestionInfo';
import { useProgressingQuestionService } from '../services/useProgressingQuestionService';

export const ProgressingQuestionContainer = () => {
  const {
    isOpen,
    meetingInfo,
    handleChangeCurrentMeeting,
    handleCloseBottomSheet,
    handleOpenBottmSheet,
    gatherName,
    progressingQuestion,
    meetingId,
    isOnlyOne,
  } = useProgressingQuestionService();

  return (
    <section css={{ width: '100%', backgroundColor: colors.primary100, padding: '0 20px' }}>
      <GatherName
        gatherName={gatherName}
        subTitle="릴레이 질문으로 더 가까워져 볼까요?"
        onClick={handleOpenBottmSheet}
      />
      <MeetingChoiceBottomSheet
        isOpen={isOpen}
        currentMeetingId={meetingId}
        meetingList={meetingInfo?.meetings ?? []}
        onClose={handleCloseBottomSheet}
        onChange={handleChangeCurrentMeeting}
      />
      {progressingQuestion ? (
        <ProgressingQuestionInfo
          css={{ padding: '18px 0 20px;' }}
          renderQuestion={
            progressingQuestion.isQuestionRegistered ? (
              <ActiveQuestion question={progressingQuestion} meetingId={meetingId} />
            ) : (
              <InActiveQuestion
                targetMember={progressingQuestion.targetMember}
                time={dayjs(progressingQuestion.startTime).valueOf()}
                isOnlyOne={isOnlyOne}
              />
            )
          }
        />
      ) : (
        <ProgressingQuestionInfo
          css={{ padding: '18px 0 20px;' }}
          renderQuestion={
            <div css={{ backgroundColor: colors.white, padding: '32px 20px', borderRadius: '16px', height: '182px' }} />
          }
        />
      )}
    </section>
  );
};

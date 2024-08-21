'use client';

import { colors, shadow, size } from '@sambad/sds/theme';
import { Button } from '@sds/components';

import { useCreateHandWavings } from '@/about-me/common/apis/mutates/useCreateHandWavings';
import { ActionBar } from '@/common/components/ActionBar/ActionBar';

import { useGetFirstMeetingId } from '../hooks/useGetFirstMeetingId';
import { useIsMyByParams } from '../hooks/useIsMyByParams';

import { ProfileContainer } from './ProfileContainer';
import { SegmentedControlContainer } from './SegmentedControlContainer';
import { handWavingButtonCss, screenRootCss } from './styles';

export const ScreenContainer = () => {
  const { isMy, meetingMemberId } = useIsMyByParams();
  const { meetingId } = useGetFirstMeetingId();
  const { mutate, isSuccess: wavingSuccess } = useCreateHandWavings();

  // FIXME: 현재 손흔들기 응답 상태에 따라서도 같이 처리할 예정
  const isProgressHandWavings = wavingSuccess;

  const handleHandWaving = () => {
    mutate({ meetingId, receiverMemberId: meetingMemberId });
  };

  return (
    <div css={screenRootCss}>
      <ActionBar title={isMy ? '마이 프로필' : '프로필'} />
      <div style={layoutStyle}>
        <ProfileContainer style={{ marginBottom: size['5xs'] }} />
        <SegmentedControlContainer style={sectionStyle} />
      </div>
      {!isMy && (
        <Button
          size="large"
          disabled={isProgressHandWavings}
          onClick={handleHandWaving}
          css={handWavingButtonCss}
          style={{ boxShadow: isProgressHandWavings ? shadow.elevation3 : undefined }}
        >
          {isProgressHandWavings ? '손 흔들어 인사하기' : '손 흔들어 인사하기 완료!'}
        </Button>
      )}
    </div>
  );
};

const layoutStyle = {
  backgroundColor: colors.grey200,
};

const sectionStyle = {
  marginTop: size['5xs'],
};

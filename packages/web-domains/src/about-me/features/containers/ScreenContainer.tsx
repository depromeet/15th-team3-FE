'use client';

import { colors, shadow, size } from '@sambad/sds/theme';
import { Button } from '@sds/components';

import { useCreateHandWavings } from '@/about-me/common/apis/mutates/useCreateHandWavings';
import { useGetHandWavingsStatus } from '@/about-me/common/apis/queries/useGetHandWavingsStatus';
import { ActionBar } from '@/common/components/ActionBar/ActionBar';

import { useConvertTypeParams } from '../hooks/useConvertTypeParams';
import { useIsMyByParams } from '../hooks/useIsMyByParams';

import { ProfileContainer } from './ProfileContainer';
import { SegmentedControlContainer } from './SegmentedControlContainer';
import { handWavingButtonCss, screenRootCss } from './styles';

export const ScreenContainer = () => {
  const { isMy } = useIsMyByParams();
  const { meetingId, meetingMemberId } = useConvertTypeParams();
  const { data: wavingStatusData, isSuccess: getWavingStatusSuccess } = useGetHandWavingsStatus({
    meetingId,
    receiverMemberId: meetingMemberId,
  });
  const { mutate, isSuccess: sendWavingSuccess } = useCreateHandWavings();

  const isProgressHandWavings = sendWavingSuccess || wavingStatusData?.status === 'REQUESTED';

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
      {!isMy && getWavingStatusSuccess && (
        <Button
          size="large"
          disabled={isProgressHandWavings}
          onClick={handleHandWaving}
          css={handWavingButtonCss}
          style={{ boxShadow: isProgressHandWavings ? shadow.elevation3 : undefined }}
        >
          {isProgressHandWavings ? '손 흔들어 인사하기 완료!' : '손 흔들어 인사하기'}
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

'use client';

import { colors, shadow, size } from '@sambad/sds/theme';
import { Button, TextButton, Txt } from '@sds/components';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { useCreateHandWavings } from '@/about-me/common/apis/mutates/useCreateHandWavings';
import { useGetHandWavingsStatus } from '@/about-me/common/apis/queries/useGetHandWavingsStatus';
import { ActionBar } from '@/common/components/ActionBar/ActionBar';

import { useGetFirstMeetingId } from '../hooks/useGetFirstMeetingId';
import { useGetIsModifyPage } from '../hooks/useGetIsModifyPage';
import { useIsMyByParams } from '../hooks/useIsMyByParams';

import { ProfileContainer } from './ProfileContainer';
import { SegmentedControlContainer } from './SegmentedControlContainer';
import { handWavingButtonCss, screenRootCss } from './styles';

export const ScreenContainer = () => {
  const segmentedRef = useRef<{ onMutate: () => void }>(null);
  const isModifyPage = useGetIsModifyPage();
  const router = useRouter();

  const { isMy, meetingMemberId } = useIsMyByParams();
  const { meetingId } = useGetFirstMeetingId();
  const { data: wavingStatusData, isSuccess: getWavingStatusSuccess } = useGetHandWavingsStatus({
    meetingId,
    receiverMemberId: meetingMemberId,
  });
  const { mutate, isSuccess: sendWavingSuccess } = useCreateHandWavings();

  const isProgressHandWavings = sendWavingSuccess || wavingStatusData?.status === 'REQUESTED';

  const handleHandWaving = () => {
    mutate({ meetingId, receiverMemberId: meetingMemberId });
  };

  const handleMoveToModifyPage = () => {
    router.push('/about/me/modify');
  };

  const handleModify = () => {
    segmentedRef.current?.onMutate();
  };

  return (
    <div css={screenRootCss}>
      <ActionBar
        title={isMy ? '마이 프로필' : '프로필'}
        rightDecor={
          isMy && (
            <TextButton
              variant="normal"
              color={colors.primary500}
              onClick={isModifyPage ? handleModify : handleMoveToModifyPage}
            >
              {/* NOTE: sds에서 Txt 컴포넌트가 css로 오버라이딩이 되지 않는 무제 해결 후 inherit 제거 예정 */}
              <Txt typography="subTitle2" style={{ color: 'inherit' }}>
                {isModifyPage ? '수정완료' : '수정하기'}
              </Txt>
            </TextButton>
          )
        }
      />
      <div style={layoutStyle}>
        <ProfileContainer style={{ marginBottom: size['5xs'] }} />
        <SegmentedControlContainer ref={segmentedRef} style={sectionStyle} />
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

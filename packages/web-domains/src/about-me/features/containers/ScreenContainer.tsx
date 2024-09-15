'use client';

import { TextButton, Txt } from '@sambad/sds/components';
import { colors, shadow, size } from '@sambad/sds/theme';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { useCreateHandWavings } from '@/about-me/common/apis/mutates/useCreateHandWavings';
import { useGetHandWavingsStatus } from '@/about-me/common/apis/queries/useGetHandWavingsStatus';
import { FloatingButton } from '@/common/components';
import { ActionBar } from '@/common/components/ActionBar/ActionBar';

import { useConvertTypeParams } from '../hooks/useConvertTypeParams';
import { useGetIsModifyPage } from '../hooks/useGetIsModifyPage';
import { useIsMyByParams } from '../hooks/useIsMyByParams';

import { ProfileContainer } from './ProfileContainer';
import { SegmentedControlContainer } from './SegmentedControlContainer';
import { screenRootCss } from './styles';

export const ScreenContainer = () => {
  const { isMy } = useIsMyByParams();
  const { meetingId, meetingMemberId } = useConvertTypeParams();
  const segmentedRef = useRef<{ onMutate: () => void }>(null);
  const isModifyPage = useGetIsModifyPage();
  const router = useRouter();

  const { data: wavingStatusData, isSuccess: getWavingStatusSuccess } = useGetHandWavingsStatus({
    meetingId,
    receiverMemberId: meetingMemberId,
  });
  const { mutate, isSuccess: sendWavingSuccess } = useCreateHandWavings();

  const hiddenForWavingButton = isMy || wavingStatusData?.status === 'ACCEPTED' || !getWavingStatusSuccess;
  const isProgressHandWavings = sendWavingSuccess || wavingStatusData?.status === 'REQUESTED';

  const handleHandWaving = () => {
    mutate({ meetingId, receiverMemberId: meetingMemberId });
  };

  const handleMoveToModifyPage = () => {
    router.push(`/${meetingId}/about/me/modify`);
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
        <ProfileContainer style={{ marginBottom: size['5xs'] }} isMy={isMy} />
        <SegmentedControlContainer ref={segmentedRef} style={sectionStyle} />
      </div>
      {!hiddenForWavingButton && (
        <FloatingButton
          size="large"
          disabled={isProgressHandWavings}
          onClick={handleHandWaving}
          style={{ boxShadow: isProgressHandWavings ? shadow.elevation3 : undefined }}
        >
          {isProgressHandWavings ? '손 흔들어 인사하기 완료!' : '손 흔들어 인사하기'}
        </FloatingButton>
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

'use client';

import { colors, size } from '@sambad/sds/theme';
import { Button } from '@sds/components';

import { ActionBar } from '@/common/components/ActionBar/ActionBar';

import { useIsMyByParams } from '../hooks/useIsMyByParams';

import { ProfileContainer } from './ProfileContainer';
import { SegmentedControlContainer } from './SegmentedControlContainer';
import { handWavingButtonCss, screenRootCss } from './styles';

export const ScreenContainer = () => {
  const { isMy } = useIsMyByParams();

  return (
    <div css={screenRootCss}>
      <ActionBar title={isMy ? '마이 프로필' : '프로필'} />
      <div style={layoutStyle}>
        <ProfileContainer style={{ marginBottom: size['5xs'] }} />
        <SegmentedControlContainer style={sectionStyle} />
      </div>
      {!isMy && (
        <Button size="large" css={handWavingButtonCss}>
          손 흔들어 인사하기
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

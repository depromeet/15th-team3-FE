'use client';

import { colors, size } from '@sambad/sds/theme';

import { ProfileContainer } from './ProfileContainer';
import { SegmentedControlContainer } from './SegmentedControlContainer';

export const ScreenContainer = () => {
  return (
    <div style={layoutStyle}>
      <ProfileContainer style={{ marginBottom: size['5xs'] }} />
      <SegmentedControlContainer style={sectionStyle} />
    </div>
  );
};

const layoutStyle = {
  backgroundColor: colors.grey200,
};

const sectionStyle = {
  marginTop: size['5xs'],
};

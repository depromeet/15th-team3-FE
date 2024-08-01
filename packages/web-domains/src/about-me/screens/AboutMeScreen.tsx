'use client';

import { colors, size } from '@sambad/sds/theme';

import { ProfileContainer } from '../features/containers/ProfileContainer';
import { SegmentedControlContainer } from '../features/containers/SegmentedControlContainer';

export const AboutMeScreen = () => {
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

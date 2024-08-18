'use client';

import { colors, size } from '@sambad/sds/theme';
import { Fragment } from 'react';

import { ProfileContainer } from './ProfileContainer';
import { SegmentedControlContainer } from './SegmentedControlContainer';

import { ActionBar } from '@/common/components/ActionBar/ActionBar';

export const ScreenContainer = () => {
  return (
    <Fragment>
      <ActionBar title="프로필" />
      <div style={layoutStyle}>
        <ProfileContainer style={{ marginBottom: size['5xs'] }} />
        <SegmentedControlContainer style={sectionStyle} />
      </div>
    </Fragment>
  );
};

const layoutStyle = {
  backgroundColor: colors.grey200,
};

const sectionStyle = {
  marginTop: size['5xs'],
};

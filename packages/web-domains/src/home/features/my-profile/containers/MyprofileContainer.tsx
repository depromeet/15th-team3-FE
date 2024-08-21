'use client';

import { Txt } from '@sds/components';
import { colors } from '@sds/theme';

export const MyprofileContainer = () => {
  return (
    <div css={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Txt typography="title2" color={colors.black}>
        프로필
      </Txt>
    </div>
  );
};

import { css } from '@emotion/react';

import { ProgressIndicatorCssArgs, StepCssArgs } from './type';

export const progressIndicatorCss = ({ flexDirection }: ProgressIndicatorCssArgs) =>
  css({ width: '100%', display: 'flex', flexWrap: 'nowrap', flexDirection });

export const stepCss = ({ basis, color }: StepCssArgs) =>
  css({
    boxSizing: 'border-box',
    flex: `${basis}% 1 1`,
    height: '4px',
    backgroundColor: color,
    borderRadius: '8px',
    margin: '2px',
  });

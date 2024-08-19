import { css } from '@emotion/react';
import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { PropsWithChildren } from 'react';

import { RelayToolTipPolygon } from '../../../relay-question/assets/RelayToolTipPolygon';

import { textWrapperCss, wrapperCss } from './ToolTip.styles';

export const ToolTip = ({ children }: PropsWithChildren) => {
  return (
    <div css={wrapperCss}>
      <div css={textWrapperCss}>
        <Txt color={colors.white} fontWeight="medium" typography="title3">
          {children}
        </Txt>
      </div>
      <RelayToolTipPolygon css={css({ position: 'absolute', top: -26, left: '50%', transform: 'translateX(-50%)' })} />
    </div>
  );
};

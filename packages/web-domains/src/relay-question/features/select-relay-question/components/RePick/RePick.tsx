import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { HTMLAttributes, ReactNode } from 'react';

import { rePickTextCss } from './RePick.styles';

interface RePickProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const RePick = ({ children, ...rest }: RePickProps) => {
  return (
    <Txt color={colors.grey600} typography="title4" fontWeight="medium" css={rePickTextCss} {...rest}>
      {children}
    </Txt>
  );
};

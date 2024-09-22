import { ElementType, forwardRef, HTMLAttributes } from 'react';

import { colors } from '../../theme';

import {
  colorVar,
  fontSizeByTypography,
  fontSizeVar,
  fontWeightByTypography,
  fontWeightVar,
  fontWeightVariants,
  TxtCss,
} from './styles';
import { FontWeight, Typography } from './types';

/**
 * @TODO
 * Polymorphic하게 만들기
 */
export interface TxtProps extends HTMLAttributes<HTMLSpanElement> {
  as?: ElementType;
  color?: string;
  typography?: Typography;
  fontWeight?: FontWeight;
}

export const Txt = forwardRef<HTMLSpanElement, TxtProps>((props, ref) => {
  const {
    as: Tag = 'span',
    color: colorFromProps,
    typography = 'body2',
    fontWeight: fontWeightFromProps,
    style: styleFromProps,
    ...restProps
  } = props;

  const color = colorFromProps ?? colors.grey700;
  const fontWeight = fontWeightVariants[fontWeightFromProps ?? fontWeightByTypography[typography]];
  const fontSize = fontSizeByTypography[typography];

  const style = {
    [colorVar]: color,
    [fontWeightVar]: fontWeight,
    [fontSizeVar]: fontSize,
    ...styleFromProps,
  };

  return <Tag ref={ref} css={TxtCss} style={style} {...restProps} />;
});

Txt.displayName = 'Txt';

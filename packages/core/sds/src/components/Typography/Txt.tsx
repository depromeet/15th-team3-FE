import { ElementType, forwardRef, HTMLAttributes } from 'react';
import { colors } from '../../theme';
import { FontWeight, Typography } from './types';
import { fontSizeByTypography, fontWeightVariants, fontWeightByTypography } from './styles';

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
  const fontWeight = fontWeightFromProps ?? fontWeightVariants[fontWeightByTypography[typography]];
  const fontSize = fontSizeByTypography[typography];

  const style = {
    color,
    fontWeight,
    fontSize,
    lineHeight: '150%',
    ...styleFromProps,
  };

  return <Tag ref={ref} style={style} {...restProps} />;
});

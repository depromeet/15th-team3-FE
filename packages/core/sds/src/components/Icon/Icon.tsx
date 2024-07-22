import { forwardRef, HTMLAttributes } from 'react';
import { IconAssetProps } from './types';
import { iconMap } from './constants';
import { colors } from '../../theme';

export interface IconProps extends IconAssetProps, HTMLAttributes<HTMLSpanElement> {
  name: keyof typeof iconMap;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { name, size = 24, color = colors.black, style: styleFromProps, ...restProps } = props;

  const style = {
    display: 'inline-flex',
    ...styleFromProps,
  };

  const IconComponent = iconMap[name];

  return (
    <span ref={ref} style={style} {...restProps}>
      <IconComponent size={size} color={color} {...restProps} />
    </span>
  );
});

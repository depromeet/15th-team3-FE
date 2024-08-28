import { Button, ButtonProps } from '@sds/components';
import { size } from '@sds/theme';
import { CSSProperties } from 'react';

interface FloatingButtonProps extends ButtonProps {
  bottom?: number;
  padding?: number;
  maxWidth?: number;
}

export const FloatingButton = (props: FloatingButtonProps) => {
  const { bottom = size['2xs'], padding = size['2xs'], maxWidth = 600, style: styleFromProps, ...restProps } = props;

  const style: CSSProperties = {
    position: 'fixed',
    // NOTE: 좌우 여백을 고려한 너비 계산
    width: `calc(100% - ${padding} * 2)`,
    bottom,
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: `calc(${maxWidth}px - ${padding} * 2)`,
    ...styleFromProps,
  };

  return <Button style={style} {...restProps} />;
};

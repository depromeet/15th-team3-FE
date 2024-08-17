import { forwardRef, ImgHTMLAttributes } from 'react';

import { containerModeAttribute } from './constants';
import { containerCss } from './styles';
import { LoaderMode } from './types';

const loadingImageUrl = 'https://file.moring.one/defaults/loading.png';

export interface LoaderProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  mode?: LoaderMode;
}

export const Loader = forwardRef<HTMLImageElement, LoaderProps>((props, ref) => {
  const { size = 60, mode = 'dim', ...restProps } = props;

  return (
    <div css={containerCss} {...containerModeAttribute.attribute(mode)}>
      <img ref={ref} src={loadingImageUrl} width={size} height={size} alt="loading" {...restProps} />
    </div>
  );
});

Loader.displayName = 'Loader';

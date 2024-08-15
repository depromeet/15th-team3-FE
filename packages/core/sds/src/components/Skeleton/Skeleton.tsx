import { forwardRef, HTMLAttributes } from 'react';

// eslint-disable-next-line import/no-cycle
import { SkeletonParagraphs } from './Paragraphs';
import { skeletonCss } from './styles';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
}

export const SkeletonImpl = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { width, height, style: styleFromProps, ...restProps } = props;

  const style = {
    width: width,
    height: height,
    ...styleFromProps,
  };

  return <div ref={ref} style={style} css={skeletonCss} {...restProps} />;
});

SkeletonImpl.displayName = 'Skeleton';

export const Skeleton = Object.assign(SkeletonImpl, {
  Paragraphs: SkeletonParagraphs,
});

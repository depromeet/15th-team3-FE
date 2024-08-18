import { forwardRef, HTMLAttributes } from 'react';

// eslint-disable-next-line import/no-cycle
import { SkeletonImpl } from './Skeleton';
import { paragraphsContainer } from './styles';

export interface SkeletonParagraphsProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
}

export const SkeletonParagraphs = forwardRef<HTMLDivElement, SkeletonParagraphsProps>((props, ref) => {
  const { count = 3 } = props;

  return (
    <div css={paragraphsContainer} ref={ref}>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonImpl key={index} />
      ))}
    </div>
  );
});

SkeletonParagraphs.displayName = 'SkeletonParagraphs';

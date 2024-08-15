// eslint-disable-next-line import/no-cycle
import { SkeletonImpl } from './Skeleton';
import { paragraphsContainer } from './styles';

export interface SkeletonParagraphsProps {
  count?: number;
}

export const SkeletonParagraphs = (props: SkeletonParagraphsProps) => {
  const { count = 3 } = props;

  return (
    <div css={paragraphsContainer}>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonImpl key={index} />
      ))}
    </div>
  );
};

import { Skeleton } from '@sds/components';
import { size } from '@sds/theme';

export const AnsweredQuestionContainerSkeletons = () => {
  return (
    <div style={{ paddingTop: size['2xs'] }}>
      <Skeleton height={24} style={skeletonStyle} />
      <Skeleton height={24} style={skeletonStyle} />
      <Skeleton height={24} style={skeletonStyle} />
      <Skeleton height={24} style={skeletonStyle} />
    </div>
  );
};

const skeletonStyle = {
  marginBottom: size['sm'],
};

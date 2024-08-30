import { Skeleton } from '@sds/components';

export const PreviousQuestionListContainerSkeleton = () => {
  return (
    <section style={{ paddingLeft: 20 }}>
      <div style={{ marginBottom: 12 }} />
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} width={310} height={70} style={{ marginBottom: 24 }} />
      ))}
    </section>
  );
};

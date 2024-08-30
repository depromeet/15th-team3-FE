import { Skeleton } from '@sds/components';

export const ProgressingQuestionContainerSkeleton = () => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Skeleton width={160} height={20} style={{ marginTop: 18, marginBottom: 12 }} />
      <Skeleton width={280} height={36} style={{ marginBottom: 20 }} />
      <Skeleton width={310} height={186} style={{ marginBottom: 32 }} />
      <Skeleton width={310} height={20} style={{ marginBottom: 52 }} />
      <Skeleton width={310} height={100} />
    </section>
  );
};

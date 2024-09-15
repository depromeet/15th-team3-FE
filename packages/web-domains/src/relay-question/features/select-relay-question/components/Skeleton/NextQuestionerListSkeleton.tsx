import { Skeleton } from '@sambad/sds/components';

export const NextQuestionerListSkeleton = () => {
  return (
    <section style={{ paddingLeft: 20 }}>
      <Skeleton width={200} height={30} style={{ marginTop: 44 }} />
      <Skeleton width={140} height={30} style={{ marginTop: 8, marginBottom: 10 }} />

      <Skeleton.Paragraphs count={2} style={{ width: 300, marginBottom: 44 }} />

      {Array.from({ length: 7 }, (_, index) => (
        <Skeleton key={index} width={160} height={40} style={{ margin: '24px 0' }} />
      ))}
    </section>
  );
};

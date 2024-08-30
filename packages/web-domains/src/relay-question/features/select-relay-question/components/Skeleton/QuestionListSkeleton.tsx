'use client';

import { Skeleton } from '@sds/components';

export const QuestionListSkeleton = () => {
  return (
    <section style={{ paddingLeft: 20 }}>
      <Skeleton width={280} height={36} style={{ marginTop: 40, marginBottom: 44 }} />
      <div>
        {Array.from({ length: 8 }, (_, index) => (
          <Skeleton key={index} width={340} height={64} style={{ margin: '22px 0' }} />
        ))}
      </div>
    </section>
  );
};

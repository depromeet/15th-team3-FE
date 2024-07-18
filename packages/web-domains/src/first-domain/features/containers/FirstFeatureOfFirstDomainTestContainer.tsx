'use client';

import { ProgressIndicator } from '@sambad/sds';

export const FirstFeatureOfFirstDomainTestContainer = () => {
  return (
    <div css={{ maxWidth: '600px;', margin: '0 auto' }}>
      <ProgressIndicator totalStep={10} currentStep={7} />
    </div>
  );
};

'use client';

import { Suspense } from 'react';

import { ProgressIndicator } from '../../components/ProgressIndicator';
import { useQueryStringContext } from '../../contexts/QueryStringContext';

import { progressIndicatorCss } from './ProgressIndicatorContainer.styles';

const TOTAL_STEP = 2;

export const ProgressIndicatorContainer = () => {
  return (
    <Suspense>
      <ProgressIndicatorSection />
    </Suspense>
  );
};

const ProgressIndicatorSection = () => {
  const { currentStep } = useQueryStringContext();

  return (
    <section css={progressIndicatorCss}>
      <ProgressIndicator currentStep={currentStep} totalStep={TOTAL_STEP} />
    </section>
  );
};

'use client';

import { ProgressIndicator } from '../../components/ProgressIndicator';
import { useQueryStringContext } from '../../contexts/QueryStringContext';

import { progressIndicatorCss } from './ProgressIndicatorContainer.styles';

const TOTAL_STEP = 2;

export const ProgressIndicatorContainer = () => {
  const { currentStep } = useQueryStringContext();

  return (
    <section css={progressIndicatorCss}>
      <ProgressIndicator currentStep={currentStep} totalStep={TOTAL_STEP} />
    </section>
  );
};

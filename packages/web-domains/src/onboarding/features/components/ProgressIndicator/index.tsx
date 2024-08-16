import { colors } from '@sds/theme';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import { progressIndicatorCss, stepCss } from './styles';

export interface ProgressIndicatorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  mode?: 'horizontal' | 'vertical';
  totalStep: number;
  currentStep: number;
}

export const ProgressIndicator = forwardRef<HTMLDivElement, PropsWithChildren<ProgressIndicatorProps>>(
  ({ mode = 'horizontal', totalStep, currentStep, children, ...rest }, ref) => {
    const flexDirection = mode === 'horizontal' ? 'row' : 'column';
    const currentStepIndex = Math.min(totalStep, currentStep) - 1;
    const basis = 100 / totalStep;

    return (
      <div ref={ref} {...rest} css={progressIndicatorCss({ flexDirection })}>
        {Array.from({ length: totalStep }).map((_, index) => (
          <ProgressIndicator.Step key={index} isCurrent={index <= currentStepIndex} basis={basis} />
        ))}
        {children}
      </div>
    );
  },
) as React.ForwardRefExoticComponent<ProgressIndicatorProps> & { Step: typeof Step };

export interface StepProps extends HTMLAttributes<HTMLSpanElement> {
  basis: number;
  isCurrent: boolean;
}

const Step = ({ isCurrent, basis, ...rest }: StepProps) => {
  let color = '#E1E1E1';

  if (isCurrent) {
    color = colors.white;
  }

  return <span {...rest} css={stepCss({ basis, color })} />;
};

ProgressIndicator.displayName = 'ProgressIndicator';
ProgressIndicator.Step = Step;

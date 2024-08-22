import { colors } from '@sds/theme';
import { CSSProperties, PropsWithChildren } from 'react';

import { STEPS, StepType } from '@/onboarding/common/constants/steps';

interface OnBoardingLayoutProps {
  step: StepType;
}

export const OnBoardingLayout = ({ children, step }: PropsWithChildren<OnBoardingLayoutProps>) => {
  const backgroundColor = layoutStyles[step] || 'none';
  return (
    <main
      style={{
        ...layoutStyle,
        backgroundColor,
      }}
    >
      {children}
    </main>
  );
};

const layoutStyle: CSSProperties = {
  position: 'relative',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
};

const layoutStyles: Record<StepType, string> = {
  [STEPS.QUESTION]: colors.primary300,
  [STEPS.RESULT]: colors.tertiary300,
  [STEPS.FRIENDSHIP]: colors.secondary400,
  [STEPS.ABOUT_ME]: colors.quaternary300,
};

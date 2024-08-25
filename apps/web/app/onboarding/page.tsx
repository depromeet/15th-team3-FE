import { OnBoardingScreen, StepType } from '@/onboarding';

interface OnBoardingPageProps {
  searchParams: {
    step: StepType;
  };
}

const OnBoardingPage = async (props: OnBoardingPageProps) => {
  const {
    searchParams: { step },
  } = props;

  return <OnBoardingScreen step={step} />;
};

export default OnBoardingPage;

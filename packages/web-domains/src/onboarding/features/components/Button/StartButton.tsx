'use client';

import { Button } from '@sds/components';
import { colors } from '@sds/theme';
import { useRouter } from 'next/navigation';

import { useOnBoardingCompleteMutation } from '@/onboarding/common/apis/mutations/useOnBoardingMutation';

interface StartButtonProps {
  redirectUrl?: string;
}

export const StartButton = (props: StartButtonProps) => {
  const { redirectUrl } = props;
  const router = useRouter();
  const { mutateAsync: onBoardingComplete } = useOnBoardingCompleteMutation();

  const handleOnBoardingComplete = async () => {
    if (redirectUrl) {
      router.push(redirectUrl);
    }

    const data = await onBoardingComplete();

    // 만약 가입된 모임이 없다면
    if (data?.isNotEnteredAnyMeeting) {
      router.push('/user');
    }
    // 만약 가입된 모임이 있다면
    else {
      router.push('/home');
    }
  };

  return (
    <Button size="large" color={colors.black} onClick={handleOnBoardingComplete}>
      시작하기
    </Button>
  );
};

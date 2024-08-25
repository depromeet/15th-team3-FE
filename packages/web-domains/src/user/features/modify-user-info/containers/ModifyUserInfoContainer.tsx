'use client';

import { notFound, redirect, useSearchParams } from 'next/navigation';

import { STEPS } from '@/user/common/constants/step';

import { GetUserBasicInfoContainer } from '../../get-user-info/containers/GetUserBasicInfoContainer';
import { GetUserExtraInfoContainer } from '../../get-user-info/containers/GetUserExtraInfoContainer';
import { GetUserHobbiesContainer } from '../../get-user-info/containers/GetUserHobbiesContainer';
import { GetUserMbtiContainer } from '../../get-user-info/containers/GetUserMbtiContainer';

import { ModifyUserIntroContainer } from './ModifyUserIntroContainer';

export const ModifyUserInfoContainer = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  if (!step) {
    redirect(`?step=${STEPS.BASIC_INFO}`);
  }

  switch (step) {
    case STEPS.BASIC_INFO:
      return <GetUserBasicInfoContainer />;
    case STEPS.EXTRA_INFO:
      return <GetUserExtraInfoContainer />;
    case STEPS.HOBBIES_INFO:
      return <GetUserHobbiesContainer />;
    case STEPS.MBTI_IFNO:
      return <GetUserMbtiContainer />;
    case STEPS.INTRO_INFO:
      return <ModifyUserIntroContainer />;
    default:
      notFound();
  }
};

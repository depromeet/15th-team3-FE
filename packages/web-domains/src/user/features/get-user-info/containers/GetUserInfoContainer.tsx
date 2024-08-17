'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { ComponentType } from 'react';

import { STEPS } from '../../../common/constants/step';

import { GetUserBasicInfoContainer } from './GetUserBasicInfoContainer';
import { GetUserExtraInfoContainer } from './GetUserExtraInfoContainer';
import { GetUserHobbiesContainer } from './GetUserHobbiesContainer';
import { GetUserIntroContainer } from './GetUserIntroContainer';
import { GetUserMbtiContainer } from './GetUserMbtiContainer';

export const GetUserInfoContainer = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  let StepPageComponent: ComponentType;
  switch (step) {
    case STEPS.BASIC_INFO:
      StepPageComponent = GetUserBasicInfoContainer;
      break;
    case STEPS.EXTRA_INFO:
      StepPageComponent = GetUserExtraInfoContainer;
      break;
    case STEPS.HOBBIES_INFO:
      StepPageComponent = GetUserHobbiesContainer;
      break;
    case STEPS.MBTI_IFNO:
      StepPageComponent = GetUserMbtiContainer;
      break;
    case STEPS.INTRO_INFO:
      StepPageComponent = GetUserIntroContainer;
      break;
    default:
      notFound();
  }

  return <StepPageComponent />;
};

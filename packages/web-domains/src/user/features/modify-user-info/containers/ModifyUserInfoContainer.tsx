'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';
import { STEPS } from '@/user/common/constants/step';

import { GetUserBasicInfoContainer } from '../../get-user-info/containers/GetUserBasicInfoContainer';
import { GetUserExtraInfoContainer } from '../../get-user-info/containers/GetUserExtraInfoContainer';
import { GetUserHobbiesContainer } from '../../get-user-info/containers/GetUserHobbiesContainer';
import { GetUserMbtiContainer } from '../../get-user-info/containers/GetUserMbtiContainer';

import { ModifyUserIntroContainer } from './ModifyUserIntroContainer';

export const ModifyUserInfoContainer = () => {
  const { meetingId } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const step = searchParams.get('step');

  const { data: memberMe, isLoading } = useGetMemberMe({ meetingId: Number(meetingId) });

  useEffect(() => {
    if (memberMe && !step) {
      const params = new URLSearchParams();
      params.append('step', STEPS.BASIC_INFO);
      params.append('userName', memberMe?.name);
      params.append('birth', memberMe?.birth.replaceAll('-', ''));
      params.append('gender', memberMe.gender);
      params.append('job', memberMe.job);
      params.append('location', memberMe.location);
      if (memberMe.mbti) {
        params.append('mbti', memberMe.mbti);
      }
      if (memberMe.hobbyDetails && memberMe.hobbyDetails.length > 0) {
        const hobbyIds = memberMe.hobbyDetails.map((hobby) => hobby.hobbyId).toString();
        params.append('hobbyIds', hobbyIds);
      }
      if (memberMe.introduction) {
        params.append('introduction', memberMe.introduction);
      }
      router.replace(`?${params.toString()}`);
    }
  }, [memberMe, step]);

  if (!step || isLoading) {
    return null;
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
      return <GetUserBasicInfoContainer />;
  }
};

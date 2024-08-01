'use client';

import { HTMLAttributes } from 'react';

import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';

import { Profile } from '../components';

type ProfileContainerProps = HTMLAttributes<HTMLDivElement>;

export const ProfileContainer = (props: ProfileContainerProps) => {
  // NOTE: 현재 스팩 상 한 유저는 한 모임에만 속할 수 있으므로 무조건적으로 1입니다.
  const { data } = useGetMemberMe({ meetingId: 1 });

  return (
    <section {...props}>
      <Profile
        name={data?.name}
        imageUrl={data?.profileImageFileUrl}
        birth={data?.birth}
        gender={data?.gender}
        mbti={data?.mbti}
        location={data?.location}
        job={data?.job}
      />
    </section>
  );
};

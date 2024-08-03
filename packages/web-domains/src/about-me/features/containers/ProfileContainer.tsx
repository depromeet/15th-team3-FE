'use client';

import { HTMLAttributes } from 'react';

import { useGetMeetings } from '@/about-me/common/apis/queries/useGetMeetings';
import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';

import { Profile } from '../components';

type ProfileContainerProps = HTMLAttributes<HTMLDivElement>;

export const ProfileContainer = (props: ProfileContainerProps) => {
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetingIds[0] || -1;
  const { data } = useGetMemberMe({ meetingId });

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

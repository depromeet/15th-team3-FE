'use client';

import { useParams } from 'next/navigation';
import { HTMLAttributes } from 'react';

import { useGetMeetings } from '@/about-me/common/apis/queries/useGetMeetings';
import { useGetMember } from '@/about-me/common/apis/queries/useGetMember';
import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';

import { Profile } from '../components';

type ProfileContainerProps = HTMLAttributes<HTMLDivElement>;

export const ProfileContainer = (props: ProfileContainerProps) => {
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetingIds[0] || -1;

  const params = useParams<{ meetingMemberId?: string }>();
  const meetingMemberId = Number(params.meetingMemberId);
  const useGetMemberQuery = meetingMemberId ? useGetMember : useGetMemberMe;

  const { data } = useGetMemberQuery({ meetingId, meetingMemberId: Number(params.meetingMemberId) });

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

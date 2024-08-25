'use client';

import { TextButton } from '@sds/components';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { Profile } from '../components';
import { useGetFirstMeetingId } from '../hooks/useGetFirstMeetingId';
import { useGetMemberByParams } from '../hooks/useGetMemberByParams';

import { profileRootCss } from './styles';

type ProfileContainerProps = HTMLAttributes<HTMLDivElement>;

export const ProfileContainer = (props: ProfileContainerProps) => {
  const { data } = useGetMemberByParams();
  const { meetingId } = useGetFirstMeetingId();

  return (
    <section {...props} css={profileRootCss}>
      <Profile
        name={data?.name}
        imageUrl={data?.profileImageFileUrl}
        birth={data?.birth}
        gender={data?.gender}
        mbti={data?.mbti}
        location={data?.location}
        job={data?.job}
      />
      <Link href={`/${meetingId}/user/modify`}>
        <TextButton variant="arrow">기본 정보 수정하러 가기</TextButton>
      </Link>
    </section>
  );
};

'use client';

import { HTMLAttributes } from 'react';

import { Profile } from '../components';
import { useGetMemberByParams } from '../hooks/useGetMemberByParams';

import { profileRootCss } from './styles';

type ProfileContainerProps = HTMLAttributes<HTMLDivElement>;

export const ProfileContainer = (props: ProfileContainerProps) => {
  const { data } = useGetMemberByParams();

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
    </section>
  );
};

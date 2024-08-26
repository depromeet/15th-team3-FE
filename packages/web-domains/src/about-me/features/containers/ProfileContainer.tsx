'use client';

import { TextButton } from '@sds/components';
import { size } from '@sds/theme';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { Profile } from '../components';
import { useConvertTypeParams } from '../hooks/useConvertTypeParams';
import { useGetMemberByParams } from '../hooks/useGetMemberByParams';

import { profileRootCss } from './styles';

interface ProfileContainerProps extends HTMLAttributes<HTMLDivElement> {
  isMy: boolean;
}

export const ProfileContainer = (props: ProfileContainerProps) => {
  const { data } = useGetMemberByParams();
  const { meetingId } = useConvertTypeParams();

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
      {props.isMy && (
        <Link href={`/${meetingId}/user/modify`} style={{ marginTop: size.xs }}>
          <TextButton variant="arrow">기본 정보 수정하러 가기</TextButton>
        </Link>
      )}
    </section>
  );
};

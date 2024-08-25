import { TextButton } from '@sds/components';
import { size } from '@sds/theme/size';
import Link from 'next/link';

import { MeetingMemberResponse } from '@/about-me/common/apis/schema/MeetingMemberResponse';
import { Profile } from '@/about-me/features/components';
import { profileRootCss } from '@/about-me/features/containers/styles';

interface MyProfileProps {
  profileInfo?: MeetingMemberResponse;
  meetingId?: number;
}

export const MyProfile = ({ profileInfo, meetingId }: MyProfileProps) => {
  return (
    <section style={{ marginBottom: size['5xs'] }} css={profileRootCss}>
      <Profile
        name={profileInfo?.name}
        imageUrl={profileInfo?.profileImageFileUrl}
        birth={profileInfo?.birth}
        gender={profileInfo?.gender}
        mbti={profileInfo?.mbti}
        location={profileInfo?.location}
        job={profileInfo?.job}
      />
      <Link href={`/${meetingId}/user/modify`}>
        <TextButton variant="arrow">기본 정보 수정하러 가기</TextButton>
      </Link>
    </section>
  );
};

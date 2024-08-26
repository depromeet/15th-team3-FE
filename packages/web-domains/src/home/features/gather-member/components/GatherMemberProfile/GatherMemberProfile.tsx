import { Icon, Txt } from '@sambad/sds/components';
import { colors } from '@sds/theme';
import Link from 'next/link';

import { Avatar } from '@/common/components/Avatar/Avatar';
import { MemberType } from '@/home/common/apis/schema/useGetProgressingQuestionQuery.type';

interface GatherMemberProfileProps {
  meetingId: number;
  member: MemberType;
}

export const GatherMemberProfile = ({ meetingId, member }: GatherMemberProfileProps) => {
  const { name, role, profileImageFileUrl, meetingMemberId, isHandWaved } = member;
  const isOwner = role === 'OWNER';

  return (
    <li
      css={{
        listStyle: 'none',
        display: 'block',
        height: '121px',
        flex: '0 1 auto',
        width: '100%',
        padding: '12px 16px',
      }}
    >
      <Link href={`${meetingId}/about/${meetingMemberId}`}>
        <div css={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <ProfileImage imageUrl={profileImageFileUrl} isConnection={isHandWaved} />
          <Txt typography="title2" css={{ marginTop: '12px' }}>
            {name}
            {isOwner && (
              <Txt typography="title1" css={{ paddingLeft: '4px', bottom: '1px', position: 'relative' }}>
                👑
              </Txt>
            )}
          </Txt>
        </div>
      </Link>
    </li>
  );
};

const ProfileImage = ({ imageUrl, isConnection = false }: { imageUrl?: string; isConnection?: boolean }) => {
  const borderStyles = isConnection ? { border: `3px solid ${colors.primary500}` } : {};

  return (
    <span css={{ position: 'relative', borderRadius: '50%', ...borderStyles }}>
      {isConnection && <Icon name="connect-star" css={{ position: 'absolute', bottom: '-4px', left: '-4px' }} />}
      <Avatar imageUrl={imageUrl} width={64} height={64} css={{ borderRadius: '50%' }} />
    </span>
  );
};

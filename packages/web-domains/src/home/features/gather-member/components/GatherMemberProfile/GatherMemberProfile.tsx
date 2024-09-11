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
  const { name, role, profileImageFileUrl, meetingMemberId, isHandWaved, isMe } = member;
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
          <ProfileImage imageUrl={profileImageFileUrl} isConnection={isHandWaved} isOnwer={isOwner} />
          <Txt typography="title2" css={{ marginTop: '12px' }}>
            {isMe ? '나' : name}
          </Txt>
        </div>
      </Link>
    </li>
  );
};

const ProfileImage = ({
  imageUrl,
  isConnection = false,
  isOnwer = false,
}: {
  imageUrl?: string;
  isConnection?: boolean;
  isOnwer?: boolean;
}) => {
  const borderColorStyles = isConnection ? { borderColor: `${colors.primary500}` } : {};

  return (
    <span css={{ position: 'relative', borderRadius: '50%', border: '3px solid transparent', ...borderColorStyles }}>
      {isConnection && <Icon name="connect-star" css={{ position: 'absolute', bottom: '-4px', left: '-4px' }} />}
      {isOnwer && (
        <Icon
          name="crown"
          color={colors.primary500}
          css={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translate(-50%, 0)' }}
        />
      )}
      <Avatar imageUrl={imageUrl} width={64} height={64} css={{ borderRadius: '50%' }} />
    </span>
  );
};

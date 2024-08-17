import { Txt } from '@sambad/sds/components';
import Link from 'next/link';

import { MemberType } from '../../../../common/apis/schema/useGetProgressingQuestionQuery.type';
import { Avatar } from '../../../../common/components/Avatar/Avatar';

interface GatherMemberProfileProps {
  member: MemberType;
}

export const GatherMemberProfile = ({ member }: GatherMemberProfileProps) => {
  const { name, role, profileImageFileUrl, meetingMemberId } = member;
  const isOwner = role === 'OWNER';

  return (
    <li css={{ listStyle: 'none' }}>
      <Link
        href={`/about/${meetingMemberId}`}
        css={{
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div css={{ alignItems: 'center', display: 'flex' }}>
          <Avatar imageUrl={profileImageFileUrl} width={40} height={40} css={{ borderRadius: '50%' }} />
          <Txt typography="title2" css={{ marginLeft: '12px' }}>
            {name}
          </Txt>
        </div>
        {isOwner && <Txt typography="title1">👑</Txt>}
      </Link>
    </li>
  );
};

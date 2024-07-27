import { Txt } from '@sambad/sds/components';

import { ProfileImage } from '../../../../../common/asset/profile';
import { MemberType } from '../../../../common/apis/schema/useGetProgressingQuestionQuery.type';
import { Avatar } from '../../../../common/Avatar/Avatar';

interface GatherMemberProfileProps {
  member: MemberType;
}

export const GatherMemberProfile = ({ member }: GatherMemberProfileProps) => {
  const { name, role } = member;
  const isOwner = role === 'OWNER';

  return (
    <li
      css={{
        listStyle: 'none',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div css={{ alignItems: 'center', display: 'flex' }}>
        <Avatar Icon={ProfileImage} size={40} />
        <Txt typography="title2" css={{ marginLeft: '12px' }}>
          {name}
        </Txt>
      </div>
      {isOwner && <Txt typography="title1">👑</Txt>}
    </li>
  );
};

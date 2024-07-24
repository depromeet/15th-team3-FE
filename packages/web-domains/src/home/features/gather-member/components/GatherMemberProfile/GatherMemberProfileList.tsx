import { borderRadiusVariants, colors } from '@sambad/sds/theme';

import { MemberType } from '../../../../../common/apis/schema/useGetProgressingQuestionQuery.type';

import { GatherMemberProfile } from './GatherMemberProfile';

interface GatherMemberProfileListProps {
  memberList: MemberType[];
}

export const GatherMemberProfileList = ({ memberList }: GatherMemberProfileListProps) => {
  console.log(memberList);

  return (
    <ul
      css={{
        width: '100%',
        borderRadius: borderRadiusVariants.medium,
        border: `1px solid ${colors.grey300}`,
      }}
    >
      {memberList.map((member) => (
        <GatherMemberProfile key={member.id} member={member} />
      ))}
    </ul>
  );
};

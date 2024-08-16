import { MemberType } from '../../../../common/apis/schema/useGetProgressingQuestionQuery.type';

import { GatherMemberProfile } from './GatherMemberProfile';

interface GatherMemberProfileListProps {
  memberList?: MemberType[];
}

export const GatherMemberProfileList = ({ memberList }: GatherMemberProfileListProps) => {
  return (
    <ul
      css={{
        marginTop: '20px',
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: '100%',
        padding: '0 16px',
        '@media(min-width: 365px)': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        '@media(min-width: 550px)': {
          gridTemplateColumns: 'repeat(4, 1fr)',
        },
      }}
    >
      {memberList?.map((member) => <GatherMemberProfile key={member.meetingMemberId} member={member} />)}
    </ul>
  );
};

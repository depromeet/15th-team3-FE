import { useRouter } from 'next/navigation';
import { CSSProperties } from 'react';

import { useConvertTypeParams } from '@/about-me/features/hooks/useConvertTypeParams';
import { SelectedAnswerResponse } from '@/result/common/apis/schema/SelectedAnswerResponse';

import { MemberListItem } from '../MemberListItem/MemberListItem';

interface MemberListProps {
  members?: SelectedAnswerResponse['selectedMembers'];
}

export const MemberList = (props: MemberListProps) => {
  const { members } = props;
  const router = useRouter();
  const { meetingId } = useConvertTypeParams();

  const style = {
    display: 'flex',
    flexDirection: 'column',
  } as CSSProperties;

  return (
    <div style={style}>
      {members?.map((member) => (
        <MemberListItem
          key={member.meetingMemberId}
          imgUrl={member.profileImageFileUrl}
          name={member.name}
          isOwner={member.role === 'OWNER'}
          onClick={() => router.push(`/${meetingId}/about/${member.meetingMemberId}`)}
        />
      ))}
    </div>
  );
};

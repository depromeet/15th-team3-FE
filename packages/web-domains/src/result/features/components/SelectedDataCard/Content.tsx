'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { Fragment } from 'react/jsx-runtime';

import { SadUserIcon } from '../../assets';

import { CountByMemberList } from './CountByMemberList';
import { Profile } from './Profile';
import {
  mostAnsweredButtonCss,
  mostAnsweredTitleCss,
  profileCss,
  withMeMembersCss,
  withMyMembersContainerCss,
} from './styles';

interface MostAnsweredProps {
  title: string;
}

export const MostAnswered = (props: MostAnsweredProps) => {
  const { title } = props;

  return (
    <Fragment>
      <Txt typography="heading1" color={colors.tertiary500} css={mostAnsweredTitleCss}>
        {title}
      </Txt>
      <Button css={mostAnsweredButtonCss}>전체 통계보기</Button>
    </Fragment>
  );
};

interface WithMeMembersProps {
  count: number;
  members: Array<{ id: number; name: string; imgUrl: string }>;
}

export const WithMeMembers = (props: WithMeMembersProps) => {
  const { count, members } = props;

  const noMembers = count === 0;
  const moreMembers = count >= 5;
  const fewMembers = !noMembers && !moreMembers;

  return (
    <div css={withMyMembersContainerCss}>
      {noMembers && (
        <div css={profileCss}>
          <SadUserIcon />
          <Txt typography="body3" color={colors.grey600}>
            아쉽게도 같은 답변을 한 모임원이 없어요
          </Txt>
        </div>
      )}

      {(fewMembers || moreMembers) && (
        <div css={withMeMembersCss}>
          {members.map((member) => (
            <Profile key={member.id} name={member.name} imgUrl={member.imgUrl} />
          ))}
        </div>
      )}

      {moreMembers && <CountByMemberList showName={members[0]?.name} count={count} />}
    </div>
  );
};

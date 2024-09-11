'use client';

import { Button, Icon, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';
import { Fragment } from 'react/jsx-runtime';

import { useConvertTypeParams } from '@/result/common/hooks/useConvertTypeParams';
import { BaseParams } from '@/result/common/types/BaseParams';

import { SadUserIcon } from '../../assets';

import { CountByMemberList } from './CountByMemberList';
import { Profile } from './Profile';
import {
  mostAnsweredButtonCss,
  mostAnsweredTitleCss,
  noMemberCss,
  profileCss,
  withMeMembersCss,
  withMyMembersContainerCss,
} from './styles';

interface MostAnsweredProps {
  contents?: Array<string>;
}

export const MostAnswered = (props: MostAnsweredProps) => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
  const { contents: contentsFromProps } = props;

  const contentText = contentsFromProps?.join(', ');

  return (
    <Fragment>
      <Txt typography="heading1" color={colors.primary500} css={mostAnsweredTitleCss}>
        {contentText}
      </Txt>
      <Link href={`/${meetingId}/question-result/${questionId}/statistics`}>
        <Button css={mostAnsweredButtonCss} leftDecor={<Icon name="stats" />}>
          전체 통계보기
        </Button>
      </Link>
    </Fragment>
  );
};

interface WithMeMembersProps {
  count?: number;
  members?: Array<{ meetingMemberId: number; name: string; profileImageFileUrl: string }>;
}

export const WithMeMembers = (props: WithMeMembersProps) => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
  const { count = 0, members } = props;

  // NOTE: 최대 4개의 프로필만 표시
  const slicedMembers = members?.slice(0, 4);

  const noMembers = count === 0;
  const moreMembers = count >= 5;
  const fewMembers = !noMembers && !moreMembers;

  return (
    <div css={withMyMembersContainerCss}>
      {noMembers && (
        <div css={[profileCss, noMemberCss]}>
          <SadUserIcon />
          <Txt typography="body3" color={colors.grey600}>
            아쉽게도 같은 답변을 한 모임원이 없어요
          </Txt>
        </div>
      )}

      {(fewMembers || moreMembers) && (
        <div css={withMeMembersCss}>
          {slicedMembers?.map((member) => (
            <Profile key={member.meetingMemberId} name={member.name} imgUrl={member.profileImageFileUrl} />
          ))}
        </div>
      )}

      {moreMembers && (
        <CountByMemberList
          showName={members?.[0]?.name}
          count={count}
          href={`/${meetingId}/question-result/${questionId}/answers/same-selected`}
        />
      )}
    </div>
  );
};

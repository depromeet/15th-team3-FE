'use client';

import { TextButton, Txt } from '@sambad/sds/components';
import Link from 'next/link';

import { countByMemberListAttribute } from './constants';
import { Profile } from './Profile';
import { memberCharacterCss, memberListCss, memberListTextButtonCss } from './styles';

export interface CountByMemberListProps {
  showName?: string;
  count?: number;
  showCharacter?: boolean;
  href?: string;
}

export const CountByMemberList = (props: CountByMemberListProps) => {
  const { showName, count = 0, showCharacter = false, href = '' } = props;

  const countText = count === 1 ? `${showName}님이 선택했어요` : `${showName}님 외 ${count}명이 선택했어요`;

  return (
    <div css={memberListCss} {...countByMemberListAttribute.attribute}>
      <Txt as="p" typography="title3">
        {countText}
      </Txt>
      <Link href={href}>
        <TextButton variant="arrow" css={memberListTextButtonCss}>
          전체보기
        </TextButton>
      </Link>
      {showCharacter && (
        <div css={memberCharacterCss}>
          <Profile imgUrl="" imgSize={20} />
        </div>
      )}
    </div>
  );
};

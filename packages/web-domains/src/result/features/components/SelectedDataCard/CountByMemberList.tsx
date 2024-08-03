'use client';

import { TextButton, Txt } from '@sambad/sds/components';
import { memberCharacterCss, memberListCss, memberListTextButtonCss } from './styles';
import { Profile } from './Profile';
import { countByMemberListAttribute } from './constants';

export interface CountByMemberListProps {
  showName?: string;
  count: number;
  showCharacter?: boolean;
}

export const CountByMemberList = (props: CountByMemberListProps) => {
  const { showName, count, showCharacter = false } = props;

  const countText = count === 1 ? `${showName}님이 선택했어요` : `${showName}님 외 ${count}명이 선택했어요`;

  return (
    <div css={memberListCss} {...countByMemberListAttribute.attribute}>
      <Txt as="p" typography="title3">
        {countText}
      </Txt>
      <TextButton variant="arrow" css={memberListTextButtonCss}>
        전체보기
      </TextButton>
      {showCharacter && (
        <div css={memberCharacterCss}>
          <Profile imgUrl="" imgSize={20} />
        </div>
      )}
    </div>
  );
};

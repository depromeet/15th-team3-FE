'use client';

import { TextButton, Txt } from '@sambad/sds/components';
import { memberCharacterCss, memberListCss, memberListTextButtonCss } from './styles';
import { Profile } from './Profile';

export interface CountByMemberListProps {
  showName: string;
  count: number;
  showCharacter?: boolean;
}

export const CountByMemberList = (props: CountByMemberListProps) => {
  const { showName, count, showCharacter = false } = props;

  return (
    <div css={memberListCss}>
      <Txt as="p" typography="title3">
        {showName}님 외 {count}명이 선택했어요
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

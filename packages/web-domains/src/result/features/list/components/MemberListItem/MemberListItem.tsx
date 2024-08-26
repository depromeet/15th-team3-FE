import { Txt } from '@sambad/sds/components';
import { HTMLAttributes } from 'react';

import { Avatar } from '@/common/components/Avatar/Avatar';

import { containerCss, ownerEmojiCss } from './styles';

interface MemberListItemProps extends HTMLAttributes<HTMLDivElement> {
  imgUrl?: string;
  name?: string;
  isOwner?: boolean;
}

export const MemberListItem = (props: MemberListItemProps) => {
  const { imgUrl, name, isOwner, ...restProps } = props;

  return (
    <div css={containerCss} {...restProps}>
      {imgUrl && <Avatar imageUrl={imgUrl} width={40} height={40} alt={`${name}_프로필_이미지`} />}
      <Txt typography="title2">{name}</Txt>
      {isOwner && (
        <Txt typography="title1" css={ownerEmojiCss}>
          👑
        </Txt>
      )}
    </div>
  );
};

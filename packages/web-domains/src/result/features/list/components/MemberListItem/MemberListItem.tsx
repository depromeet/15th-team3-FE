import { Txt } from '@sambad/sds/components';
import Image from 'next/image';

import { containerCss, ownerEmojiCss } from './styles';

interface MemberListItemProps {
  imgUrl?: string;
  name?: string;
  isOwner?: boolean;
}

export const MemberListItem = (props: MemberListItemProps) => {
  const { imgUrl, name, isOwner } = props;

  return (
    <div css={containerCss}>
      {imgUrl && <Image src={imgUrl} width={40} height={40} alt={`${name}_프로필_이미지`} />}
      <Txt typography="title2">{name}</Txt>
      {isOwner && (
        <Txt typography="title1" css={ownerEmojiCss}>
          👑
        </Txt>
      )}
    </div>
  );
};

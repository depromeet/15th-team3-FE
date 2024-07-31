'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';

import { commentAttribute } from './constants';
import { commentCss, commentProfileCss } from './styles';

interface CommentProps {
  comment: string;
  name: string;
  imgUrl: string;
}

export const Comment = (props: CommentProps) => {
  const { comment, name, imgUrl } = props;

  return (
    <div css={commentCss} {...commentAttribute.attribute}>
      <Txt as="p" typography="body2">
        {comment}
      </Txt>
      <div css={commentProfileCss}>
        <Image src={imgUrl} width={16} height={16} alt={`${name}_프로필_이미지`} />
        <Txt typography="body4" color={colors.grey600}>
          {name}
        </Txt>
      </div>
    </div>
  );
};

'use client';

import { Txt, TxtProps } from '@sambad/sds/components';
import Image from 'next/image';
import { profileCss } from './styles';
import { HTMLAttributes } from 'react';

export interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
  imgUrl?: string;
  imgSize?: number;
  name?: string;
  nameTypography?: TxtProps['typography'];
}

export const Profile = (props: ProfileProps) => {
  const { imgUrl, imgSize = 40, name, nameTypography = 'body3', ...restProps } = props;

  return (
    <div css={profileCss} {...restProps}>
      {imgUrl && <Image src={imgUrl} width={imgSize} height={imgSize} alt={`${name}_프로필_이미지`} />}
      {name && <Txt typography={nameTypography}>{name}</Txt>}
    </div>
  );
};

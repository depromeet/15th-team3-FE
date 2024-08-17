'use client';

import { Txt, TxtProps } from '@sambad/sds/components';
import { borderRadiusVariants } from '@sds/theme';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

import { profileCss } from './styles';

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
      {imgUrl && (
        <Image
          src={imgUrl}
          width={imgSize}
          height={imgSize}
          alt={`${name}_프로필_이미지`}
          style={{ borderRadius: borderRadiusVariants.round }}
        />
      )}
      {name && <Txt typography={nameTypography}>{name}</Txt>}
    </div>
  );
};

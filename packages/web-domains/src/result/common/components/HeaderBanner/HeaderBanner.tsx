'use client';

import { Txt } from '@sambad/sds/components';
import Image from 'next/image';

import { FallbackThumbnail } from './FallbackThumbnail';
import { bannerCss, thumbnailCss, titleCss } from './styles';

interface HeaderBannerProps {
  thumbnail?: string;
  title?: string;
}

export const HeaderBanner = (props: HeaderBannerProps) => {
  const { thumbnail, title } = props;

  return (
    <section css={bannerCss}>
      {thumbnail != null ? (
        <Image src={thumbnail} width={64} height={64} css={thumbnailCss} alt={`${title}_질문_썸네일`} />
      ) : (
        <FallbackThumbnail />
      )}
      <Txt as="h1" typography="heading1" fontWeight="regular" css={titleCss}>
        우리 모임원들이
        <strong>{title}</strong>
      </Txt>
    </section>
  );
};

import { css } from '@emotion/react';
import Image, { StaticImageData } from 'next/image';

interface BackGroundProps {
  imageUrl?: string | StaticImageData;
}

export const BackGroundImage = (props: BackGroundProps) => {
  const { imageUrl } = props;

  if (!imageUrl) {
    return null;
  }

  return (
    <div css={backGroundContainerCss}>
      <Image src={imageUrl} alt="background-img" fill priority style={{ objectFit: 'contain' }} />
    </div>
  );
};

const backGroundContainerCss = css({
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, 0)',
  width: '100%',
  height: 'calc(100% - 116px)',
  zIndex: '-1',
});

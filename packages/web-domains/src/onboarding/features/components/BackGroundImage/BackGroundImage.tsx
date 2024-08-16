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
    <div css={backGroundImageCss}>
      <Image src={imageUrl} alt="background-img" fill priority />
    </div>
  );
};

const backGroundImageCss = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  aspectRatio: '1',
  zIndex: '1',
});

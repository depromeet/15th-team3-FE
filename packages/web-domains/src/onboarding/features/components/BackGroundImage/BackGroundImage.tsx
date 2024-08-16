import { css } from '@emotion/react';
import Image from 'next/image';

interface BackGroundProps {
  src?: string;
}

export const BackGroundImage = (props: BackGroundProps) => {
  const { src } = props;

  if (!src) {
    return null;
  }

  return (
    <div css={backGroundImageCss}>
      <Image src={src} alt="background-img" fill priority />
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

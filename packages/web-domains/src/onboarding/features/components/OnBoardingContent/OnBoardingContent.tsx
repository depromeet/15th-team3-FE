import Image, { StaticImageData } from 'next/image';

import { BackGroundImage } from '../BackGroundImage/BackGroundImage';

interface OnBoardingContentProps {
  imageUrl?: string | StaticImageData;
  imageWidth?: number | string;
  imageTopPosition?: number;
  bgImageUrl?: string | StaticImageData;
}
export const OnBoardingContent = (props: OnBoardingContentProps) => {
  const { imageUrl, bgImageUrl, imageWidth, imageTopPosition } = props;

  if (!imageUrl) {
    return null;
  }

  return (
    <div
      css={{
        position: 'relative',
        flexGrow: 1,
        zIndex: '10',
      }}
    >
      <div
        css={{
          position: 'relative',
          width: imageWidth ?? '90%',
          maxWidth: '400px',
          height: '100%',
          left: '50%',
          transform: 'translate(-50%, 0)',
          top: imageTopPosition,
        }}
      >
        <Image src={imageUrl} alt="on-boarding-img" fill priority style={{ objectFit: 'contain' }} />
      </div>
      <BackGroundImage imageUrl={bgImageUrl} />
    </div>
  );
};

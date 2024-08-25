import Image, { StaticImageData } from 'next/image';

import { BackGroundImage } from '../BackGroundImage/BackGroundImage';

interface OnBoardingContentProps {
  imageUrl?: string | StaticImageData;
  bgImageUrl?: string | StaticImageData;
}
export const OnBoardingContent = (props: OnBoardingContentProps) => {
  const { imageUrl, bgImageUrl } = props;

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
          width: '90%',
          maxWidth: '400px',
          height: '100%',
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
      >
        <Image src={imageUrl} alt="on-boarding-img" fill priority style={{ objectFit: 'contain' }} />
      </div>
      <BackGroundImage imageUrl={bgImageUrl} />
    </div>
  );
};

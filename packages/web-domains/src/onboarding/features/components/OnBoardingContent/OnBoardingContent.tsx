import Image, { StaticImageData } from 'next/image';

interface OnBoardingContentProps {
  imageUrl?: string | StaticImageData;
}
export const OnBoardingContent = (props: OnBoardingContentProps) => {
  const { imageUrl } = props;

  if (!imageUrl) {
    return null;
  }

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        flexGrow: 1,
        zIndex: '10',
      }}
    >
      <div css={{ position: 'relative', width: '90%' }}>
        <Image src={imageUrl} alt="on-boarding-img" fill priority style={{ objectFit: 'contain' }} />
      </div>
    </div>
  );
};

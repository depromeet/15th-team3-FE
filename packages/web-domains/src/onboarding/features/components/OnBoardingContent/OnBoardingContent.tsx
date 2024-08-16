import Image from 'next/image';

interface OnBoardingContentProps {
  src?: string;
}
export const OnBoardingContent = (props: OnBoardingContentProps) => {
  const { src } = props;

  if (!src) {
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
        <Image src={src} alt="on-boarding-img" fill priority style={{ objectFit: 'contain' }} />
      </div>
    </div>
  );
};

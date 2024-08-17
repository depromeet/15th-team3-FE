import Image, { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';

interface BackgroundImageProps {
  src: StaticImageData;
  alt: string;
  style?: CSSProperties;
}

export const BackgroundImage = (props: BackgroundImageProps) => {
  const { src, alt, style: styleFromProps } = props;

  return (
    <div style={{ position: 'absolute', ...styleFromProps }}>
      <Image src={src} fill alt={alt} priority />
    </div>
  );
};

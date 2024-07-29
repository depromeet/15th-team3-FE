import Image, { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';

interface BackgroundImageProps {
  src: StaticImageData;
  alt: string;
  style?: CSSProperties;
}

export const BackgroundImage = ({ src, alt, style }: BackgroundImageProps) => {
  return (
    <div style={{ position: 'absolute', ...style }}>
      <Image src={src} fill alt={alt} priority />
    </div>
  );
};

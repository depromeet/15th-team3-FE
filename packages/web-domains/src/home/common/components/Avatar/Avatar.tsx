import Image, { ImageProps } from 'next/image';

interface AvatarProps extends Omit<ImageProps, 'src' | 'alt'> {
  imageUrl?: string;
  alt?: string;
  size?: number;
  Icon?: React.ComponentType<{ size?: number }>;
}

export const Avatar = ({ imageUrl, alt = 'profile-image', size, Icon, ...rest }: AvatarProps) => {
  if (!imageUrl) {
    return (
      <span css={{ display: 'inline-flex' }} {...rest}>
        {Icon && <Icon size={size} />}
      </span>
    );
  }

  return <Image src={imageUrl} alt={alt} css={{ objectFit: 'cover' }} {...rest} />;
};

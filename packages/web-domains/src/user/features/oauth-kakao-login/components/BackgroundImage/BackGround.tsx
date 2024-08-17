import circle from '../../../../common/assets/images/circle.png';
import GreenClover from '../../../../common/assets/images/green-clover.png';
import halfCircle from '../../../../common/assets/images/half-circle.png';
import purpleClover from '../../../../common/assets/images/purple-clover.png';
import rosette from '../../../../common/assets/images/rosette.png';

import { BackgroundImage } from './BackGroundImage';

const images = [
  { src: GreenClover, alt: 'bg_green', style: { top: '0', left: '20%', width: '50%', aspectRatio: '3/2' } },
  { src: halfCircle, alt: 'bg_red-half', style: { top: '18%', right: '0', width: '25%', aspectRatio: '1/2' } },
  { src: purpleClover, alt: 'bg-purple', style: { top: '60%', right: '0', width: '35%', aspectRatio: '3/4' } },
  { src: rosette, alt: 'bg-yellow', style: { bottom: '0', left: '0', width: '45%', aspectRatio: '1' } },
  { src: circle, alt: 'bg-red', style: { left: 0, top: '30%', width: '25%', aspectRatio: '3/5' } },
];

export const BackGround = () => {
  return (
    <>
      {images.map((image, index) => (
        <BackgroundImage key={index} src={image.src} alt={image.alt} style={image.style} />
      ))}
    </>
  );
};

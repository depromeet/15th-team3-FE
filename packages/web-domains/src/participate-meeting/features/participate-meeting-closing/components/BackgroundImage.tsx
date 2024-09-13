import Image from 'next/image';

import Character from '../../../common/assets/images/welcome-meeting.png';

export const BackgroundImage = () => {
  return (
    <div
      css={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        zIndex: -1,
      }}
    >
      <Image src={Character} alt="meeting-character" priority fill style={{ objectFit: 'contain' }} />
    </div>
  );
};

import Image from 'next/image';

import Character from '../../../common/assets/images/welcome-meeting.png';

export const BackgroundImage = () => {
  return (
    <div
      css={{
        position: 'absolute',
        bottom: '140px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: -1,
      }}
    >
      <div
        css={{
          width: '80%',
          aspectRatio: '1',
          position: 'relative',
        }}
      >
        <Image src={Character} alt="meeting-character" priority fill />
      </div>
    </div>
  );
};

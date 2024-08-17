import Image from 'next/image';

import Character from '../../../common/assets/images/welcome-invite-meeting.png';

export const BackgroundImage = () => {
  return (
    <div css={{ position: 'absolute', bottom: '0', width: '100%', aspectRatio: '1', zIndex: -1 }}>
      <Image src={Character} alt="meeting-character" priority fill />
    </div>
  );
};

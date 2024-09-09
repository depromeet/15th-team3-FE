import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Image from 'next/image';

import ClosingBackground from '../../../common/assets/images/closing-background.png';

interface ClosingMessageProps {
  name?: string;
}

const ClosingMessage = (props: ClosingMessageProps) => {
  const { name } = props;

  if (!name) {
    null;
  }

  return (
    <div
      css={{
        position: 'absolute',
        top: '108px',
        width: '100%',
        zIndex: '1',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width: 365px)': {
          top: '64px',
        },
      }}
    >
      <div css={{ transform: 'translate(0, 20%)' }}>
        {name && (
          <Txt as="h1" color={colors.primary500} typography="heading1">
            {name}
          </Txt>
        )}
        <Txt as="h2" color={colors.black} typography="heading1">
          모임을 만들었어요!
        </Txt>
        <Txt as="p" color={colors.grey600} typography="body3" css={{ marginTop: size['6xs'] }}>
          이제 모임원을 초대해보세요!
        </Txt>
      </div>

      <div
        css={{
          position: 'absolute',
          width: '90%',
          aspectRatio: '3/2',
          maxWidth: '500px',
        }}
      >
        <Image alt="background-image" src={ClosingBackground} quality={100} fill style={{ objectFit: 'contain' }} />
      </div>
    </div>
  );
};

export default ClosingMessage;

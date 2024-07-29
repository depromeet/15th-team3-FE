import { Button, Txt } from '@sambad/sds/components';
import Link from 'next/link';

import { KakaoIcon } from '../../../../common/assets/icons/KakaoIcon';

const KAKAO_URL = 'https://api.moring.one/oauth2/authorization/kakao';

export const KakaoLoginButton = () => {
  return (
    <Link href={KAKAO_URL}>
      <Button size="large" css={{ backgroundColor: '#FEE500' }}>
        <KakaoIcon css={{ marginRight: '8px' }} />
        <Txt typography="subtitle1" color="rgba(0, 0, 0, 0.85)" css={{ marginLeft: '8px' }}>
          카카오톡으로 시작하기
        </Txt>
      </Button>
    </Link>
  );
};

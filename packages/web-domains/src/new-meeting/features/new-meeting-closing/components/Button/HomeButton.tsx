import { Button } from '@sambad/sds/components';
import { size } from '@sambad/sds/theme';
import Link from 'next/link';

export const HomeButton = () => {
  return (
    <Link href="/home">
      <Button size="large" variant="sub" css={{ marginTop: size['5xs'] }}>
        홈으로 가기
      </Button>
    </Link>
  );
};

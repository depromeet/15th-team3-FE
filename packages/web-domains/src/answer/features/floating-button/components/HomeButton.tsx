import { Button } from '@sambad/sds/components';
import Link from 'next/link';

export const HomeButton = () => {
  return (
    <Link href="/home" css={{ width: '100%' }}>
      <Button variant="sub" css={{ marginTop: '12px' }}>
        홈으로 가기
      </Button>
    </Link>
  );
};

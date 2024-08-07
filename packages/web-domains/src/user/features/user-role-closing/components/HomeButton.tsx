import { Button } from '@sambad/sds/components';
import Link from 'next/link';

export const HomeButton = () => {
  return (
    <Link href="/home">
      <Button size="large">모임 홈 가기</Button>
    </Link>
  );
};

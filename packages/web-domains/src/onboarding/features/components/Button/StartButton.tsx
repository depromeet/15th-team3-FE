import { Button } from '@sds/components';
import { colors } from '@sds/theme';
import { useRouter } from 'next/navigation';

export const StartButton = () => {
  const router = useRouter();

  return (
    <Button size="large" color={colors.black} onClick={() => router.push('/user')}>
      시작하기
    </Button>
  );
};

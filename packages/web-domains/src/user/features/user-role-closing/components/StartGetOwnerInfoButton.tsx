import { Button } from '@sambad/sds/components';
import Link from 'next/link';

import { STEPS } from '@/user/common/constants/step';
import { useQueryString } from '@/user/common/hooks/useQueryString';

export const StartGetOwnerInfoButton = () => {
  const { getCurrentQueryString, addQueryString } = useQueryString();

  addQueryString({ step: STEPS.BASIC_INFO });

  const searchParams = getCurrentQueryString();

  const href = `/user/owner?${searchParams}`;

  return (
    <Link href={href}>
      <Button size="large">모임장 정보 입력하러가기</Button>
    </Link>
  );
};

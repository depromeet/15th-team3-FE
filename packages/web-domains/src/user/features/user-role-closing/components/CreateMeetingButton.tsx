import { Button } from '@sambad/sds/components';
import Link from 'next/link';

export const CreateMeetingButton = () => {
  // TODO 모임 정보 입력 페이지 생성
  return (
    <Link href="#">
      <Button size="large">모임 정보 입력하러가기</Button>
    </Link>
  );
};

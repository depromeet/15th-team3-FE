import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Link from 'next/link';

export const StartRelayQuestionButton = () => {
  return (
    <Link href="#">
      <Button css={{ height: size['3xl'] }}>
        <Txt typography="subtitle1" color={colors.white}>
          릴레이 질문 시작하기
        </Txt>
      </Button>
    </Link>
  );
};

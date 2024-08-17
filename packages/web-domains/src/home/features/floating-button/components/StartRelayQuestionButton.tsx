import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

export const StartRelayQuestionButton = ({ ...rest }: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <Link href="/start-relay-question">
      <Button css={{ height: size['3xl'] }} {...rest}>
        <Txt typography="subtitle1" color={colors.white}>
          릴레이 질문 시작하기
        </Txt>
      </Button>
    </Link>
  );
};

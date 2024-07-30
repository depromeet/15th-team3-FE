import { Button } from '@sambad/sds/components';
import { size } from '@sambad/sds/theme';
import Link from 'next/link';

import { STEPS } from '../../../common/constants/step';

interface FloatingButtonProps {
  selectedValue: string;
}

export const UserInfoButton = (props: FloatingButtonProps) => {
  const { selectedValue } = props;

  return (
    <div
      css={{
        position: 'fixed',
        bottom: size.xl,
        margin: '0 auto',
        width: '100%',
        maxWidth: '600px',
        padding: '0 20px',
      }}
    >
      <Link href={`/user/${selectedValue}?step=${STEPS.BASIC_INFO}`}>
        <Button size="large" disabled={!selectedValue}>
          다음
        </Button>
      </Link>
    </div>
  );
};

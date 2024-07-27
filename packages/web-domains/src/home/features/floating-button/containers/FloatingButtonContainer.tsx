'use client';

import dayjs from 'dayjs';

import { AlreadyProgressingQuestionButton } from '../components/AlreadyProgressingQuestionButton';

export const FloatingButtonContainer = () => {
  return (
    <div
      css={{ position: 'fixed', bottom: '40px', margin: '0 auto', width: '100%', maxWidth: '600px', padding: '0 20px' }}
    >
      <AlreadyProgressingQuestionButton time={dayjs().valueOf()} />
      {/* <Link href="#">
        <Button css={{ height: '56px' }}>
          <Txt typography="subtitle1" color={colors.white}>
            릴레이 질문 시작하기
          </Txt>
        </Button>
      </Link>
      <Link href="#">
        <Button css={{ height: '56px' }}>
          <Txt typography="subtitle1" color={colors.white}>
            릴레이 질문 시작하기
          </Txt>
        </Button>
      </Link> */}
    </div>
  );
};

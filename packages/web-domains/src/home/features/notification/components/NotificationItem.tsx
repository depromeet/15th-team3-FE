import { Txt } from '@sds/components';
import { colors } from '@sds/theme';
import dayjs from 'dayjs';

const ArrivedNewQuestion = ({ questionCount }: { questionCount: number }) => {
  return (
    <div css={{ padding: '16px 20px' }}>
      <Txt as="p" typography="title2" color={colors.black} css={{ marginBottom: '8px' }}>
        {questionCount}번째 새로운 릴레이 질문이 도착했어요!
      </Txt>
      <Txt typography="title4" color={colors.grey500}>
        {dayjs().format('YY-MM-DD')}
      </Txt>
    </div>
  );
};

const SelectedTarget = () => {
  return (
    <div css={{ padding: '16px 20px' }}>
      <Txt as="p" typography="title2" color={colors.black}>
        다음 릴레이 질문인은 바로 당신!
      </Txt>
      <Txt as="p" typography="title2" color={colors.black} css={{ marginBottom: '8px' }}>
        지금 접속해 릴레이 질문을 만들어주세요
      </Txt>
      <Txt typography="title4" color={colors.grey500}>
        {dayjs().format('YY-MM-DD')}
      </Txt>
    </div>
  );
};

const Greeting = ({ from, to }: { from: string; to: string }) => {
  return (
    <div css={{ padding: '16px 20px' }}>
      <Txt as="p" typography="title2" color={colors.black} css={{ marginBottom: '8px' }}>
        {from}님이 {to}님에게 인사를 건냈어요!
      </Txt>
      <Txt typography="title4" color={colors.grey500}>
        {dayjs().format('YY-MM-DD')}
      </Txt>
    </div>
  );
};

export const NotificationItem = {
  ArrivedNewQuestion,
  SelectedTarget,
  Greeting,
};

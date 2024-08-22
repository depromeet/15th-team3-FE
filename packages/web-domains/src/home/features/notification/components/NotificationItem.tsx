import { Button, Icon, Txt } from '@sds/components';
import { colors } from '@sds/theme';
import dayjs from 'dayjs';
import { ReactNode } from 'react';

import { AlarmEventType } from '@/home/common/apis/schema/Notification.schema';

const AlarmItem = ({ alarm, footer }: { alarm: AlarmEventType; footer?: ReactNode }) => {
  const { createdAt, messages } = alarm;

  return (
    <div css={{ padding: '16px 20px' }}>
      {messages.map((message, i) => (
        <Txt key={i} as="p" typography="title2" color={colors.black}>
          {message}
        </Txt>
      ))}
      <Txt typography="title4" color={colors.grey500} css={{ marginTop: '8px' }}>
        {dayjs(createdAt).format('YY-MM-DD')}
      </Txt>
      {footer}
    </div>
  );
};

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

const Greeting = ({ fromId, alarm }: { fromId?: number; alarm: AlarmEventType }) => {
  const { additionalData, createdAt, messages } = alarm;

  return (
    <div css={{ padding: '16px 20px' }}>
      {messages.map((message, i) => (
        <Txt key={i} as="p" typography="title2" color={colors.black}>
          {message}
        </Txt>
      ))}
      <Txt typography="title4" color={colors.grey500} css={{ marginTop: '8px' }}>
        {dayjs(createdAt).format('YY-MM-DD')}
      </Txt>
      <div>
        <Button variant="primary" leftDecor={<Icon name="close-icon" />}>
          나도 인사 건네기
        </Button>
        <Button variant="sub" leftDecor={<Icon name="close-icon" />}>
          다음에 인사하기
        </Button>
      </div>
    </div>
  );
};

export const NotificationItem = {
  AlarmItem,
  ArrivedNewQuestion,
  SelectedTarget,
  Greeting,
};

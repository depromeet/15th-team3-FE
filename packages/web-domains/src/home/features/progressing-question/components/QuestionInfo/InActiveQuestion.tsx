'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import dynamic from 'next/dynamic';
import Countdown from 'react-countdown';

import { ClockIcon } from '../../../../../common/asset/clock';
import { MemberType } from '../../../../common/apis/schema/useGetProgressingQuestionQuery.type';
import { Avatar } from '../../../../common/components/Avatar/Avatar';
import { getRemainTime } from '../../../../common/utils/getRemainTime';

const CountdownRender = dynamic(
  () => import('./InActiveCountdownRender.tsx').then((mod) => mod.InActiveCountdownRender),
  {
    ssr: true,
  },
);

interface InActiveQuestionProps {
  time: number;
  targetMember: MemberType;
  isOnlyOne: boolean;
}

export const InActiveQuestion = ({ time, targetMember, isOnlyOne }: InActiveQuestionProps) => {
  const { name } = targetMember;

  const timer = getRemainTime(time);

  if (isOnlyOne) {
    return (
      <div css={{ backgroundColor: colors.white, padding: '32px 20px', borderRadius: '16px', height: '182px' }}>
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Avatar Icon={ClockIcon} size={40} />
          <Txt as="p" typography="title3" color={colors.grey600} css={{ marginTop: '12px' }}>
            모임원이 입장해야 시작할 수 있어요!
          </Txt>
        </div>
      </div>
    );
  }

  return (
    <div css={{ backgroundColor: colors.white, padding: '32px 20px', borderRadius: '16px', height: '182px' }}>
      <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
        <Avatar Icon={ClockIcon} size={40} />
        <Txt as="p" typography="title3" color={colors.grey600} css={{ marginTop: '12px' }}>
          {name}님의 질문을 기다리고 있어요
        </Txt>
        <Countdown
          date={timer}
          renderer={({ hours, minutes, seconds }) => (
            <CountdownRender hours={hours} minutes={minutes} seconds={seconds} />
          )}
        />
      </div>
    </div>
  );
};

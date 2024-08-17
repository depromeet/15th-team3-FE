'use client';

import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import Countdown from 'react-countdown';

import { ClockIcon } from '../../../../../common/asset/clock';
import { MemberType } from '../../../../common/apis/schema/useGetProgressingQuestionQuery.type';
import { Avatar } from '../../../../common/components/Avatar/Avatar';
import { getRemainTime } from '../../../../common/utils/getRemainTime';

interface InActiveQuestionProps {
  time: number;
  targetMember: MemberType;
}

export const InActiveQuestion = ({ time, targetMember }: InActiveQuestionProps) => {
  const { name } = targetMember;

  const timer = getRemainTime(time);

  return (
    <div css={{ backgroundColor: colors.white, padding: '32px 20px', borderRadius: '16px' }}>
      <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
        <Avatar Icon={ClockIcon} size={40} />
        <Txt as="p" typography="title3" color={colors.grey600} css={{ marginTop: '12px' }}>
          {name}님의 질문을 기다리고 있어요
        </Txt>
        <Countdown date={timer} renderer={CountdownRender} />
      </div>
    </div>
  );
};

const CountdownRender = ({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) => {
  const renderHours = hours < 10 ? `0${hours}` : `${hours}`;
  const renderMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const renderseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div
      css={{
        width: '97px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '29px',
        padding: '4px 8px',
        borderRadius: borderRadiusVariants.medium,
        backgroundColor: colors.grey300,
        marginTop: '16px',
      }}
    >
      <Txt typography="title3" color={colors.grey600}>
        {renderHours}
      </Txt>
      <Txt typography="title3" color={colors.grey600} css={{ padding: '0 4px' }}>
        :
      </Txt>
      <Txt typography="title3" color={colors.grey600}>
        {renderMinutes}
      </Txt>
      <Txt typography="title3" color={colors.grey600} css={{ padding: '0 4px' }}>
        :
      </Txt>
      <Txt typography="title3" color={colors.grey600}>
        {renderseconds}
      </Txt>
    </div>
  );
};

'use client';

import { Txt } from '@sambad/sds/components';
import { size } from '@sambad/sds/theme';

import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';

import { HobbyList, IntroduceBox } from '../components';

import { subTitleAttribute } from './constants';
import { titleCss } from './styles';

export const AboutMeContainer = () => {
  const { data } = useGetMemberMe({ meetingId: 1 });

  return (
    <section style={{ padding: `${size['4xs']} 0` }}>
      <Txt typography="subtitle1" css={titleCss} {...subTitleAttribute.attribute}>
        모임원들과 이런 걸 함께하고 싶어요
      </Txt>
      <HobbyList contents={data?.hobbies} />
      <Txt typography="subtitle1" css={titleCss} {...subTitleAttribute.attribute}>
        저는 이런 사람이에요
      </Txt>
      <IntroduceBox content={data?.introduction} />
    </section>
  );
};

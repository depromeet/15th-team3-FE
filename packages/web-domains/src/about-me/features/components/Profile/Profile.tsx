'use client';

import { Badge, Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import Image from 'next/image';

import { badgeContainerCss, nameCss, rootCss } from './styles';

interface ProfileProps {
  imageUrl: string;
  name: string;
  gender?: 'MALE' | 'FEMALE';
  birth?: string;
  job?: string;
  location?: string;
  mbti?: string;
}

const colorMap = [colors.secondary100, colors.primary100, colors.tertiary50, colors.quaternary100, colors.primary200];

export const Profile = (props: ProfileProps) => {
  const { name, imageUrl, birth: birthFromProps, gender: genderFromProps, mbti, location, job } = props;

  // FIXME: dayjs로 나이 변환 예정
  const age = birthFromProps;
  const gender = genderFromProps === 'FEMALE' ? '여자' : '남자';

  const infoBadges = [age, gender, mbti, location, job].filter(Boolean);

  return (
    <section css={rootCss}>
      <Image
        src={imageUrl}
        width={80}
        height={80}
        alt={`${name}_프로필_이미지`}
        style={{ borderRadius: borderRadiusVariants.round }}
      />
      <Txt typography="heading2" css={nameCss}>
        {name}
      </Txt>
      <div css={badgeContainerCss}>
        {infoBadges.map((info, index) => (
          <Badge key={info} color={colorMap[index]}>
            #{info}
          </Badge>
        ))}
      </div>
    </section>
  );
};

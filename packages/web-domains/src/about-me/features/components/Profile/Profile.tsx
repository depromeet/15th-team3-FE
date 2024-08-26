'use client';

import { Badge, Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { Fragment } from 'react';

import { Avatar } from '@/common/components/Avatar/Avatar';

import { badgeContainerCss, nameCss } from './styles';
import { generateAge, generateGender } from './utils';

interface ProfileProps {
  imageUrl?: string;
  name?: string;
  gender?: 'MALE' | 'FEMALE';
  birth?: string;
  job?: string;
  location?: string;
  mbti?: string;
}

const colorMap = [colors.secondary100, colors.primary100, colors.tertiary50, colors.quaternary100, colors.primary200];

export const Profile = (props: ProfileProps) => {
  const { name, imageUrl, birth: birthFromProps, gender: genderFromProps, mbti, location, job } = props;

  const age = birthFromProps && generateAge(birthFromProps);
  const gender = generateGender(genderFromProps);

  const infoBadges = [age, gender, mbti, location, job].filter(Boolean);

  return (
    <Fragment>
      {imageUrl != null && (
        <Avatar
          imageUrl={imageUrl}
          width={80}
          height={80}
          alt={`${name}_프로필_이미지`}
          style={{ borderRadius: borderRadiusVariants.round }}
        />
      )}
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
    </Fragment>
  );
};

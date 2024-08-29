'use client';

import { If } from '@sambad/react-utils';
import { Badge, Icon, Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { Fragment } from 'react';

import { useGetHandWavingsStatus } from '@/about-me/common/apis/queries/useGetHandWavingsStatus';
import { Avatar } from '@/common/components/Avatar/Avatar';

import { useConvertTypeParams } from '../../hooks/useConvertTypeParams';

import { wavingAcceptedMemberAttribute } from './constants';
import { AvatarCss, badgeContainerCss, nameCss, wavingAcceptedBadgeCss } from './styles';
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

  const { meetingId, meetingMemberId } = useConvertTypeParams();
  const { data: wavingStatusData } = useGetHandWavingsStatus({
    meetingId,
    receiverMemberId: meetingMemberId,
  });

  const isWavingAcceptedMember = wavingStatusData?.status === 'ACCEPTED';

  const age = birthFromProps && generateAge(birthFromProps);
  const gender = generateGender(genderFromProps);

  const infoBadges = [age, gender, mbti, location, job].filter((value) => value != null);

  return (
    <Fragment>
      {imageUrl != null && (
        <div style={{ position: 'relative' }}>
          <Avatar
            imageUrl={imageUrl}
            width={120}
            height={120}
            alt={`${name}_프로필_이미지`}
            style={{ borderRadius: borderRadiusVariants.round }}
            css={AvatarCss}
            {...wavingAcceptedMemberAttribute.attribute(isWavingAcceptedMember)}
          />
          <If condition={isWavingAcceptedMember}>
            <span css={wavingAcceptedBadgeCss}>
              <Icon name="star" size={16} color={colors.white} />
            </span>
          </If>
        </div>
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

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';

import { RelayStartDecoCircle } from '../../../../assets/RelayStartDecoCircle';
import { RelayStartDecoStar } from '../../../../assets/RelayStartDecoStar';
import { RelayStartDefaultProfile } from '../../../../assets/RelayStartDefaultProfile';

import {
  profileImgDecoWrapperCss,
  profileImgWrapperCss,
  profileIntroductionCss,
  profileSectionCss,
  SVGPositionCss,
} from './Profile.styles';

interface ProfileProps {
  profileImageUrl: string;
}

const convertProfileImage = (profileImageUrl: string) => {
  if (!profileImageUrl) {
    return <RelayStartDefaultProfile />;
  }

  return (
    <div css={profileImgWrapperCss}>
      <Image src={profileImageUrl} alt="profile image" width={142} height={142} style={{ objectFit: 'cover' }} />
    </div>
  );
};

export const Profile = ({ profileImageUrl }: ProfileProps) => {
  return (
    <section css={profileSectionCss}>
      <div css={profileIntroductionCss}>
        <Txt
          typography="heading1"
          color={colors.black}
          fontWeight="bold"
          css={{ textAlign: 'center', wordBreak: 'keep-all' }}
        >
          이번 릴레이 질문인은 바로 나!
        </Txt>
        <Txt color={colors.grey600} style={{ textAlign: 'center' }}>
          릴레이 질문을 통해서 모임원들에게
          <br /> 궁금한 질문을 물어보세요
        </Txt>
      </div>

      <div css={profileImgDecoWrapperCss}>
        <RelayStartDecoCircle size={11} css={SVGPositionCss({ top: 123, left: -26 })} />
        <RelayStartDecoCircle css={SVGPositionCss({ top: 137, left: 0 })} />
        <RelayStartDecoCircle css={SVGPositionCss({ top: -16, left: 112 })} />
        <RelayStartDecoStar css={SVGPositionCss({ top: -20, left: 124 })} />
        <RelayStartDecoCircle size={8} css={SVGPositionCss({ top: 28, left: 168 })} />
        {convertProfileImage(profileImageUrl)}
      </div>
    </section>
  );
};

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { RelayStartDecoCircle } from '../../../../assets/RelayStartDecoCircle';
import { RelayStartDecoStar } from '../../../../assets/RelayStartDecoStar';
import { RelayStartDefaultProfile } from '../../../../assets/RelayStartDefaultProfile';

import { ProfileImgBoxCss, ProfileIntroductionCss, ProfileSectionCss, SVGPositionCSS } from './Profile.styles';

export const Profile = () => {
  return (
    <section css={ProfileSectionCss}>
      <div css={ProfileIntroductionCss}>
        <Txt typography="heading1">이번 릴레이 질문인은 바로 나!</Txt>
        <Txt color={colors.grey600} style={{ textAlign: 'center' }}>
          릴레이 질문을 통해서 모임원들에게
          <br /> 궁금한 질문을 물어보세요
        </Txt>
      </div>

      <div css={ProfileImgBoxCss}>
        <RelayStartDecoCircle size={11} css={SVGPositionCSS({ top: 123, left: -26 })} />
        <RelayStartDecoCircle css={SVGPositionCSS({ top: 137, left: 0 })} />
        <RelayStartDecoCircle css={SVGPositionCSS({ top: -16, left: 112 })} />
        <RelayStartDecoStar css={SVGPositionCSS({ top: -20, left: 124 })} />
        <RelayStartDecoCircle size={8} css={SVGPositionCSS({ top: 28, left: 168 })} />
        <RelayStartDefaultProfile />
      </div>
    </section>
  );
};

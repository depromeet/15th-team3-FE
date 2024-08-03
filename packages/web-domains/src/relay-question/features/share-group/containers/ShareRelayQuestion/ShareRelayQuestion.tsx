import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { CopyLink } from '../../components/CopyLink/CopyLink';
import { ShareKakao } from '../../components/ShareKakao/ShareKakao';

import { buttonWrapperCss, textWrapperCss } from './ShareRelayQuestion.styles';

interface ShareRelayQuestionProps {
  title: string;
}

export const ShareRelayQuestion = ({ title }: ShareRelayQuestionProps) => {
  return (
    <section>
      <div css={textWrapperCss}>
        <Txt color={colors.black} typography="heading2" fontWeight="bold">
          {title}
        </Txt>
        <Txt color={colors.black} typography="heading2" fontWeight="bold">
          공유해 보세요!
        </Txt>
      </div>
      <div css={buttonWrapperCss}>
        <ShareKakao />
        <CopyLink />
      </div>
      <Button variant="sub">닫기</Button>
    </section>
  );
};

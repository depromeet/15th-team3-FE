import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { useToast } from '../../../../hooks/useToast';
import { CopyLink } from '../../components/CopyLink/CopyLink';
import { ShareKakao } from '../../components/ShareKakao/ShareKakao';

import { buttonWrapperCss, textWrapperCss } from './ShareRelayQuestion.styles';

interface ShareRelayQuestionProps {
  title: string;
  onClose: () => void;
}

export const ShareRelayQuestion = ({ title, onClose }: ShareRelayQuestionProps) => {
  const openToast = useToast();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    openToast({ content: '링크를 복사했어요!' });
  };

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
        <CopyLink onClick={handleCopyLink} />
      </div>
      <Button variant="sub" onClick={onClose}>
        닫기
      </Button>
    </section>
  );
};

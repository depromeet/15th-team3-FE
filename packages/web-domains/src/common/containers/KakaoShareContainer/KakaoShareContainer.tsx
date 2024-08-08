import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

export interface ShareRelayQuestionProps {
  title: string;
  openGraphKey: KakaoShareOpenGraphKeyType;
  onClose: () => void;
}

export const KakaoShareContainer = ({ title, openGraphKey, onClose }: ShareRelayQuestionProps) => {
  const openToast = useToast();

  const searchParams = new URLSearchParams(location.search);
  const questionId = Number(searchParams.get('question-id'));
  const questionerName = searchParams.get('questioner-name') || '';

  const handleCopyLink = async () => {
    await copyToClipboard(window.location.href);

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
        <ShareKakao openGraphKey={openGraphKey} questionId={questionId} questionerName={questionerName} />
        <CopyLink onClick={handleCopyLink} />
      </div>
      <Button variant="sub" onClick={onClose}>
        닫기
      </Button>
    </section>
  );
};

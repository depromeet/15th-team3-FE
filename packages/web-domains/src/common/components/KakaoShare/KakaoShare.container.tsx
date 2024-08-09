import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { useState } from 'react';

import { CopyLinkButton } from '@/common/components/KakaoShare/CopyLinkButton';
import { ShareKakaoButton } from '@/common/components/KakaoShare/KakaoShareButton';

import { copyToClipboard } from './copyToClipboard.utils';
import { KakaoShareOpenGraphKeyType } from './generateKakaoShare.utils';
import { buttonWrapperCss, textWrapperCss } from './KakaoShare.container.styles';
import { Toast } from './Toast';

export interface ShareRelayQuestionProps {
  title: string;
  openGraphKey: KakaoShareOpenGraphKeyType;
  onClose: () => void;
}

export const KakaoShareContainer = ({ title, openGraphKey, onClose }: ShareRelayQuestionProps) => {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  const searchParams = new URLSearchParams(location.search);
  const questionId = Number(searchParams.get('question-id'));
  const questionerName = searchParams.get('questioner-name') || '';

  const handleCopyLink = async () => {
    await copyToClipboard(window.location.href);

    setIsToastOpen(true);
  };

  return (
    <section>
      <div css={textWrapperCss}>
        <Txt color={colors.black} typography="heading2" fontWeight="bold" css={{ width: '232px', textAlign: 'center' }}>
          {title}
        </Txt>
      </div>
      <div css={buttonWrapperCss}>
        <ShareKakaoButton openGraphKey={openGraphKey} questionId={questionId} questionerName={questionerName} />
        <CopyLinkButton onClick={handleCopyLink} />
      </div>
      <Button variant="sub" onClick={onClose}>
        닫기
      </Button>
      {isToastOpen && (
        <Toast showTime={1500} onClose={() => setIsToastOpen(false)}>
          링크를 복사했어요!
        </Toast>
      )}
    </section>
  );
};

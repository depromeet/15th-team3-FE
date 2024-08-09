'use client';

import { Button, Txt } from '@sds/components';
import { colors } from '@sds/theme';
import { HTMLAttributes, useEffect, useState } from 'react';

import { Modal } from '../Modal/Modal';

import { CopyLinkButton } from './CopyLink';
import { copyToClipboard } from './copyToClipboard.utils';
import { KakaoShareOpenGraphKeyType } from './generateKakaoShare.utils';
import { ShareKakaoButton } from './KakaoShare';
import { buttonWrapperCss, textWrapperCss } from './KakaoShareModal.styles';
import { Toast } from './Toast';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  openGraphKey: KakaoShareOpenGraphKeyType;
}

export const KakaoShareModal = ({ title, openGraphKey, isOpen, onClose, ...rest }: ModalProps) => {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  const searchParams = new URLSearchParams(location.search);
  const questionId = Number(searchParams.get('question-id'));
  const questionerName = searchParams.get('questioner-name') || '';

  const handleCopyLink = async () => {
    await copyToClipboard(window.location.href);

    setIsToastOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';

      setIsToastOpen(false);
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <section>
        <div css={textWrapperCss}>
          <Txt
            color={colors.black}
            typography="heading2"
            fontWeight="bold"
            css={{ width: '232px', textAlign: 'center' }}
          >
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
          <Toast duration={1500} onClose={() => setIsToastOpen(false)}>
            링크를 복사했어요!
          </Toast>
        )}
      </section>
    </Modal>
  );
};

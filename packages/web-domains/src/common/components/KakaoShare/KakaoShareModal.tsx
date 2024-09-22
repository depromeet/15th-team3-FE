'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { HTMLAttributes, useEffect, useState } from 'react';

import { Modal } from '../Modal/Modal';

import { CopyLinkButton } from './CopyLink';
import { copyToClipboard } from './copyToClipboard.utils';
import { ShareKakaoButton } from './KakaoShare';
import { buttonWrapperCss, textWrapperCss } from './KakaoShareModal.styles';
import { Toast } from './Toast';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  topTitle: string;
  bottomTitle?: string;
  shareImageUrl?: string;
  shareDescription?: string;
  shareLink?: string;
}

const DEFAULT_IMAGE_URL = 'https://file.moring.one/defaults/invite_narrow.png';
const DEFAULT_DESCRIPTION = '모임원들이 하나가 되는 서비스, 모링';

export const KakaoShareModal = ({
  topTitle,
  bottomTitle,
  shareImageUrl,
  shareDescription,
  shareLink,
  isOpen,
  onClose,
  ...rest
}: ModalProps) => {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  const locationHref = typeof window === 'undefined' ? '' : window.location.href;

  const imageUrl = shareImageUrl || DEFAULT_IMAGE_URL;
  const description = shareDescription || DEFAULT_DESCRIPTION;
  const link = shareLink || locationHref;

  const handleCopyLink = async () => {
    await copyToClipboard(link);

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
          <Txt color={colors.black} typography="heading2" fontWeight="bold">
            {topTitle}
          </Txt>
          <Txt color={colors.black} typography="heading2" fontWeight="bold">
            {bottomTitle}
          </Txt>
        </div>
        <div css={buttonWrapperCss}>
          <ShareKakaoButton shareImageUrl={imageUrl} shareDescription={description} shareLink={link} />
          <CopyLinkButton onClick={handleCopyLink} />
        </div>
        <Button variant="sub" size="large" onClick={onClose}>
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

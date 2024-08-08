'use client';

import { HTMLAttributes, useEffect } from 'react';

import { Modal } from '../Modal/Modal';

import { KakaoShareOpenGraphKeyType } from './generateKakaoShare.utils';
import { KakaoShareContainer } from './KakaoShare.container';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  openGraphKey: KakaoShareOpenGraphKeyType;
  toastMessage: string;
  toastShowTime?: number;
}

export const KakaoShareModal = ({
  title,
  openGraphKey,
  toastMessage,
  toastShowTime,
  isOpen,
  onClose,
  ...rest
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <KakaoShareContainer
        title={title}
        openGraphKey={openGraphKey}
        onClose={onClose}
        toastMessage={toastMessage}
        toastShowTime={toastShowTime}
      />
    </Modal>
  );
};

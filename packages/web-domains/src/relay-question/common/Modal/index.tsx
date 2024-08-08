'use client';

import { HTMLAttributes, ReactNode, useEffect } from 'react';

import { contentWrapperCss, overlayCss, wrapperCss } from './styles';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ children, isOpen, onClose, ...rest }: ModalProps) => {
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
    <>
      {isOpen && (
        <section css={wrapperCss} {...rest}>
          <div css={overlayCss} onClick={onClose} />
          <div css={contentWrapperCss}>{children}</div>
        </section>
      )}
    </>
  );
};

'use client';

import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { HTMLAttributes, PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  footer?: ReactNode;
  onClose?: () => void;
}

export const Modal = ({ isOpen, onClose, children, footer, ...rest }: PropsWithChildren<ModalProps>) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose?.();
    }
  };

  useEffect(() => {
    setElement(document.body);
  }, []);

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

  if (typeof window === 'undefined' || !element || !isOpen) {
    return <></>;
  }

  return createPortal(
    <div
      css={{ width: '100%', height: '100%', background: '#00000066', position: 'fixed', top: 0, zIndex: 100 }}
      onClick={handleClose}
    >
      <div
        id="modal"
        css={{
          padding: '20px',
          width: '335px',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: colors.white,
          borderRadius: borderRadiusVariants.medium,
          zIndex: 1000,
        }}
        {...rest}
      >
        {children}
        <div id="modal-footer">{footer}</div>
      </div>
    </div>,
    element,
  );
};

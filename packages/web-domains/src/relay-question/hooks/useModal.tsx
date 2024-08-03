import { useOverlay } from '@toss/use-overlay';
import { ComponentType, useCallback } from 'react';

import { Modal } from '../common/Modal';

interface ModalContentProps {
  onConfirm: () => void;
  onClose: () => void;
}

interface OpenModalProps<T> {
  component: ComponentType<T & ModalContentProps>;
  componentProps: T;
}

export const useModal = () => {
  const overlay = useOverlay();

  const openModal = useCallback(
    <T,>({ component: Component, componentProps }: OpenModalProps<T>) => {
      return new Promise<boolean>((resolve) => {
        overlay.open(({ isOpen, close }) => (
          <Modal
            isOpen={isOpen}
            onClose={() => {
              resolve(false);
              close();
            }}
          >
            <Component
              {...componentProps}
              onConfirm={() => {
                resolve(true);
                close();
              }}
              onClose={() => {
                resolve(false);
                close();
              }}
            />
          </Modal>
        ));
      });
    },
    [overlay],
  );

  return openModal;
};

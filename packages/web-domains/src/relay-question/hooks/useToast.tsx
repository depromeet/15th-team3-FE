import { useOverlay } from '@toss/use-overlay';
import { useCallback } from 'react';

import { Toast } from '../common/Toast';

interface OpenToastProps {
  content: string;
  showTime?: number;
}

export const useToast = () => {
  const overlay = useOverlay();

  const openToast = useCallback(
    ({ content, showTime }: OpenToastProps) => {
      overlay.open(() => (
        <Toast isOpen={true} showTime={showTime}>
          {content}
        </Toast>
      ));
    },
    [overlay],
  );

  return openToast;
};

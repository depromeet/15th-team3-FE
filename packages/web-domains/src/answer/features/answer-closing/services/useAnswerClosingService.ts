import { useAtomValue } from 'jotai';

import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { getWebDomain } from '@/common';
import { useDialogContext } from '@/common/contexts/DialogProvider';

export const useAnswerClosingService = () => {
  const { close, isOpen } = useDialogContext();
  const answerGlobalTime = useAtomValue(answerAtoms.answerGlobalTime);
  const basePath = getWebDomain();

  console.log(basePath);
  return {
    answerGlobalTime: answerGlobalTime ?? 0,
    isOpen,
    close,
    basePath,
  };
};

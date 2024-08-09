import { useAtomValue } from 'jotai';

import { answerAtoms } from '@/answer/common/atoms/answer.atom';

export const useAnswerClosingService = () => {
  const answerGlobalTime = useAtomValue(answerAtoms.answerGlobalTime);

  return {
    answerGlobalTime: answerGlobalTime ?? 0,
  };
};

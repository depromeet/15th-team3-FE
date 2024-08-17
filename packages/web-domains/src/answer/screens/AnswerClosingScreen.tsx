import { DialogContextProvider } from '@/common/contexts/DialogProvider';

import { AnswerClosingContainer } from '../features/answer-closing/containers/AnswerClosingContainer';

export const AnswerClosingScreen = async () => {
  return (
    <DialogContextProvider>
      <AnswerClosingContainer />
    </DialogContextProvider>
  );
};

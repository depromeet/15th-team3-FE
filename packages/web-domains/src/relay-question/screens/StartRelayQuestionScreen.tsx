import { Suspense } from 'react';

import { StartQuestionContainer } from '../features/start-relay-question/containers/StartQuestionContainer/StartQuestionContainer';

export const StartRelayQuestionScreen = async () => {
  return (
    <Suspense>
      <StartQuestionContainer />
    </Suspense>
  );
};

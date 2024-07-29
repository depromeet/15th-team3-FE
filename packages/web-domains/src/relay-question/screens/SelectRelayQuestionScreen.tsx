import { Suspense } from 'react';

import { ContentContainer } from '../features/select-relay-question/containers/ContentContainer/ContentContainer';
import { ProgressIndicatorContainer } from '../features/select-relay-question/containers/ProgressIndicatorContainer/ProgressIndicatorContainer';
import { RandomPickContainer } from '../features/select-relay-question/containers/RandomPickContainer/RandomPickContainer';
import { QueryStringProvider } from '../features/select-relay-question/contexts/QueryStringContext';

export const SelectRelayQuestionScreen = async () => {
  return (
    <Suspense>
      <SelectRelayQuestion />
    </Suspense>
  );
};

const SelectRelayQuestion = () => {
  return (
    <QueryStringProvider>
      <ProgressIndicatorContainer />
      <ContentContainer />
      <RandomPickContainer />
    </QueryStringProvider>
  );
};

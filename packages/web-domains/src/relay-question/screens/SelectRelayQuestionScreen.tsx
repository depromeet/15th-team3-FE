import { ProgressIndicatorContainer } from '../features/select-relay-question/containers/ProgressIndicatorContainer/ProgressIndicatorContainer';
import { QuestionList } from '../features/select-relay-question/containers/QuestionList/QuestionList';
import { RandomPick } from '../features/select-relay-question/containers/RandomPick/RandomPick';
import { QueryStringProvider } from '../features/select-relay-question/contexts/QueryStringContext';

export const SelectRelayQuestionScreen = () => {
  return (
    <QueryStringProvider>
      <ProgressIndicatorContainer />
      <QuestionList />
      <RandomPick />
    </QueryStringProvider>
  );
};

import { MostAnsweredContainers, WithMyMembersContainers, CommentListContainer } from '../features/main/containers';
import { BaseLayout } from '../features/common/components';

export const ResultMainScreen = () => {
  return (
    <BaseLayout>
      <MostAnsweredContainers />
      <WithMyMembersContainers />
      <CommentListContainer />
    </BaseLayout>
  );
};

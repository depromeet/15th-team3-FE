'use client';

import { BaseLayout } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

import { CommentListContainer } from './CommentListContainer';
import { HeaderContainer } from './HeaderContainer';
import { MostAnsweredContainers } from './MostAnsweredContainer';
import { WithMyMembersContainers } from './WithMyMembersContainer';

export const ResultMainContainer = (params: BaseParams) => {
  return (
    <BaseLayout header={<HeaderContainer {...params} />}>
      <MostAnsweredContainers {...params} />
      <WithMyMembersContainers {...params} />
      <CommentListContainer {...params} />
    </BaseLayout>
  );
};

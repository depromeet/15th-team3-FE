import { BaseLayout } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

import { HeaderContainer } from '../../main/containers';
import { StatisticsContainer } from '../containers/StatisticsContainer';

export const StatisticsScreen = (params: BaseParams) => {
  return (
    <BaseLayout title="전체 통계 결과" header={<HeaderContainer {...params} />}>
      <StatisticsContainer {...params} />
    </BaseLayout>
  );
};

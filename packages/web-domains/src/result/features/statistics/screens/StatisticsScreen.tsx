import { BaseLayout } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

import { HeaderContainer } from '../../main/containers';
import { StatisticsContainer } from '../containers/StatisticsContainer';

const data = [
  { label: 'A', value: 0.3, color: '#f00' },
  { label: 'B', value: 0.2, color: '#0f0' },
  { label: 'C', value: 0.1, color: '#00f' },
  { label: 'D', value: 0.4, color: '#ff0' },
];

export const StatisticsScreen = (params: BaseParams) => {
  return (
    <BaseLayout header={<HeaderContainer {...params} />}>
      <StatisticsContainer {...params} />
    </BaseLayout>
  );
};

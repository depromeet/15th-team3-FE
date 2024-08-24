import { Skeleton } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { AngleRightIcon } from '../../../../../../../core/sds/src/components/Icon/assets/AngleRight';

export const HomePreviousQuestionItemPlaceholder = () => {
  return (
    <li
      css={{
        height: '113px',
        width: '100%',
        padding: '16px 20px',
        listStyle: 'none',
        '& + &': {
          borderTop: `1px solid ${colors.grey400}`,
        },
      }}
    >
      <div
        css={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}
      >
        <div css={{ flex: '1' }}>
          <Skeleton.Paragraphs count={3} />
        </div>
        <div css={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
          <AngleRightIcon size={16} color={colors.grey600} />
        </div>
      </div>
    </li>
  );
};

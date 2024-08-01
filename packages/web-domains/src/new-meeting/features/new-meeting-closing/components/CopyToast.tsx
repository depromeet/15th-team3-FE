import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { Check } from '@/new-meeting/common/assets/icons/Check';

export const CopyToast = ({ content }: { content: string }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '136px',
      }}
    >
      <Check />
      <Txt as="p" typography="title3" color={colors.white} css={{ marginTop: '14px' }}>
        {content}
      </Txt>
    </div>
  );
};

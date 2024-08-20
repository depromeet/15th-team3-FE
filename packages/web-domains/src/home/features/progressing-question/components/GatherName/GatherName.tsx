import { Txt } from '@sambad/sds/components';
import { colors } from '@sds/theme';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { Avatar } from '../../../../common/components/Avatar/Avatar';

interface GatherNameProps extends HTMLAttributes<HTMLDivElement> {
  gatherName: string;
  profileImage?: string;
}

export const GatherName = ({ gatherName, profileImage, ...rest }: GatherNameProps) => {
  return (
    <div css={{ padding: '32px 0 24px', display: 'flex', justifyContent: 'space-between' }} {...rest}>
      <div>
        <Txt typography="heading1" color="#ff7664" as="h1" css={{ marginBottom: '4px' }}>
          {gatherName}
        </Txt>
        <Txt typography="heading2" color={colors.black} as="h2">
          모임원들과 더 가까워져 볼까요?
        </Txt>
      </div>
      <div css={{ marginLeft: '4px', position: 'relative', top: '11px' }}>
        <Link href="/about/me">
          <Avatar imageUrl={profileImage} width={48} height={48} css={{ borderRadius: '50%' }} />
        </Link>
      </div>
    </div>
  );
};

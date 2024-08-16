import { Txt } from '@sambad/sds/components';
import { HTMLAttributes } from 'react';

interface GatherNameProps extends HTMLAttributes<HTMLDivElement> {
  gatherName?: string;
}

export const GatherName = ({ gatherName, ...rest }: GatherNameProps) => {
  return (
    <div css={{ padding: '32px 0 24px', display: 'flex', justifyContent: 'space-between' }} {...rest}>
      <div>
        <Txt typography="heading1" color="#ff7664" as="h1" css={{ marginBottom: '4px' }}>
          {gatherName}
        </Txt>
        <Txt typography="heading2" as="h2">
          모임원들과 더 가까워져 볼까요?
        </Txt>
      </div>
    </div>
  );
};

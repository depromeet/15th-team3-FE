import { Icon, Skeleton, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { HTMLAttributes } from 'react';

interface GatherNameProps extends HTMLAttributes<HTMLDivElement> {
  gatherName?: string;
  subTitle: string;
  onClick?: () => void;
}

export const GatherName = ({ gatherName, subTitle, onClick, ...rest }: GatherNameProps) => {
  return (
    <div css={{ padding: '32px 0 24px', display: 'flex', justifyContent: 'space-between' }} {...rest}>
      <div>
        <button
          css={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '4px' }}
          onClick={onClick}
        >
          {gatherName ? (
            <>
              <Txt typography="heading1" color="#ff7664" as="h1">
                {gatherName}
              </Txt>
              <Icon name="up-and-down" size={20} />
            </>
          ) : (
            <Skeleton
              css={{ width: '150px', height: '24px', marginBottom: '12px', top: '8px', position: 'relative' }}
            />
          )}
        </button>
        <Txt typography="heading2" color={colors.black} as="h2">
          {subTitle}
        </Txt>
      </div>
    </div>
  );
};

import { css } from '@emotion/react';
import { Button } from '@sambad/sds';

import type { PropsWithChildren } from 'react';

interface FirstFeatureOfFirstDomainBoxProps {
  displayText: string;
  onClick?: () => void;
}

export const FirstFeatureOfFirstDomainBox = ({
  displayText,
  onClick,
  children,
}: PropsWithChildren<FirstFeatureOfFirstDomainBoxProps>) => {
  return (
    <div>
      <Button css={css``} appName="Container Box Button" onClick={onClick}>
        FirstDomainTestBox
      </Button>
      {displayText}
      {children}
    </div>
  );
};

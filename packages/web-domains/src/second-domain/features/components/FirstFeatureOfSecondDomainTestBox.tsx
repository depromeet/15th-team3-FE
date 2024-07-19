import { Button } from '@sambad/sds';

import type { PropsWithChildren } from 'react';

interface FirstFeatureOfSecondDomainBoxProps {
  displayText: string;
  onClick?: () => void;
}

export const FirstFeatureOfSecondDomainTestBox = ({
  displayText,
  onClick,
  children,
}: PropsWithChildren<FirstFeatureOfSecondDomainBoxProps>) => {
  return (
    <div>
      <Button size="large" variant="text" onClick={onClick}>
        SecondDomainTestBox
      </Button>
      {displayText}
      {children}
    </div>
  );
};

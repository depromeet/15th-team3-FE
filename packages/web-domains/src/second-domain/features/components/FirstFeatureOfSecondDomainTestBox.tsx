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
      <Button appName="Container Box Button" onClick={onClick}>
        SecondDomainTestBox
      </Button>
      {displayText}
      {children}
    </div>
  );
};

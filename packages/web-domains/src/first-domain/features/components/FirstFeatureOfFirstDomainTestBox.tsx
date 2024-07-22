import { Button } from '@sambad/sds/components';

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
      <Button size="large" variant="primary" onClick={onClick}>
        FirstDomainTestBox
      </Button>
      {displayText}
      {children}
    </div>
  );
};

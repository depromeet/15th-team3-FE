import { Button } from '@sambad/sds';

import { useFirstFeatureOfFirstDomainTestButton } from '../hooks/useFirstFeatureOfFirstDomainTestButton';

import type { HTMLAttributes, ReactNode } from 'react';

export interface FirstFeaturedOfFirstDomainTestButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const FirstFeatureOfFirstDomainTestButton = ({
  children,
  ...rest
}: FirstFeaturedOfFirstDomainTestButtonProps) => {
  const { testText, handleChangeTestText } = useFirstFeatureOfFirstDomainTestButton();

  return (
    <Button appName="sambad" onClick={handleChangeTestText} {...rest}>
      {children}
      {testText}
    </Button>
  );
};

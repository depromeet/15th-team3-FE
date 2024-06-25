import { Button } from '@sambad/ui';

import { useFirstFeatureOfFirstDomainTestButton } from '../hooks/useFirstFeatureOfFirstDomainTestButton';

import type { HTMLAttributes, ReactNode } from 'react';

interface FirstFeaturedOfSecondDomainTestButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const FirstFeatureOfSecondDomainTestButton = ({
  children,
  ...rest
}: FirstFeaturedOfSecondDomainTestButtonProps) => {
  const { testText, handleChangeTestText } = useFirstFeatureOfFirstDomainTestButton();

  return (
    <Button appName="sambad" onClick={handleChangeTestText} {...rest}>
      {children}
      {testText}
    </Button>
  );
};

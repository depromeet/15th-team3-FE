import { Button } from '@sambad/sds/components';

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
    <Button variant="primary" size="large" onClick={handleChangeTestText} {...rest}>
      {children}
      {testText}
    </Button>
  );
};

'use client';

import { Button } from '@sambad/sds';

import { useFirstFeatureOfFirstDomainTestButton } from '../hooks/useFirstFeatureOfFirstDomainTestButton';

import type { HTMLAttributes, ReactNode } from 'react';

export interface FirstFeatureOfFirstDomainTestButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const FirstFeatureOfFirstDomainTestButton = ({
  children,
  ...rest
}: FirstFeatureOfFirstDomainTestButtonProps) => {
  const { testText, handleChangeTestText } = useFirstFeatureOfFirstDomainTestButton();

  return (
    <Button appName="sambad" onClick={handleChangeTestText} {...rest}>
      {children}
      {testText}
    </Button>
  );
};

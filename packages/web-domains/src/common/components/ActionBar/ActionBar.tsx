'use client';

import { Txt } from '@sambad/sds/components';
import { useRouter } from 'next/navigation';
import { HTMLAttributes, ReactNode } from 'react';

import { BackIcon } from '../../asset/back';

import { actionBarWrapperStyles, addOnStyles, buttonStyles } from './ActionBar.styles';

interface ActionBarProps extends HTMLAttributes<HTMLHeadElement> {
  disableBack?: boolean;
  title?: string;
  addOn?: ReactNode;
  onBack?: () => void;
}

export const ActionBar = ({ disableBack = false, title, addOn, onBack, ...rest }: ActionBarProps) => {
  const { back } = useRouter();

  const handleBack = () => {
    back();
    onBack?.();
  };

  return (
    <header css={{ padding: '0 8px' }}>
      <div css={actionBarWrapperStyles} {...rest}>
        {!disableBack && (
          <button css={buttonStyles} onClick={handleBack}>
            <BackIcon size={24} />
          </button>
        )}
        <Txt typography="title2">{title}</Txt>
        <button css={addOnStyles}>{addOn}</button>
      </div>
    </header>
  );
};

'use client';

import { Txt } from '@sds/components';
import { colors, size } from '@sds/theme';
import { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  subTitle: string;
  Icon: ReactNode | (() => JSX.Element);
}
export const Header = (props: HeaderProps) => {
  const { title, subTitle, Icon } = props;
  return (
    <header
      css={{
        position: 'relative',
        zIndex: '100',
        padding: `${size.xs} ${size['2xs']}`,
        textAlign: 'center',
      }}
    >
      {typeof Icon === 'function' ? Icon() : Icon}
      <Txt
        as="h1"
        typography="heading1"
        color={colors.black}
        css={{ '& span': { display: 'block' }, marginTop: '12px' }}
      >
        {title}
        <span>{subTitle}</span>
      </Txt>
    </header>
  );
};

'use client';

import { Txt } from '@sds/components';
import { colors, size } from '@sds/theme';
import { ReactNode } from 'react';

import { textWithSlideUpAnimationCss } from './styles';

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
        css={textWithSlideUpAnimationCss}
        style={{ marginTop: '12px' }}
      >
        {title}
        <span css={textWithSlideUpAnimationCss} style={{ display: 'block' }}>
          {subTitle}
        </span>
      </Txt>
    </header>
  );
};

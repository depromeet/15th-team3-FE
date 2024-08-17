'use client';

import { Txt } from '@sambad/sds/components';
import { HTMLAttributes, ReactNode } from 'react';

import { cardCss } from './styles';

interface SelectedDataCard extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  children?: ReactNode;
}

export const SelectedDataCard = (props: SelectedDataCard) => {
  const { title, children, ...restProps } = props;

  return (
    <section css={cardCss} {...restProps}>
      <Txt as="h2" typography="subtitle1">
        {title}
      </Txt>
      {children}
    </section>
  );
};

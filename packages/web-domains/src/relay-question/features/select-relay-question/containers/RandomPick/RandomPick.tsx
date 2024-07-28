'use client';

import { css } from '@emotion/react';
import { Button } from '@sambad/sds/components';
import { size } from '@sambad/sds/theme';

import { RelayRandomButtonDocumentIcon } from '../../../../assets/RelayRandomButtonIcon';

import { randomPickCss } from './RandomPick.styles';

export const RandomPick = () => {
  return (
    <section css={randomPickCss}>
      <Button css={css({ padding: `${size['4xs']} ${size['2xs']}` })}>
        <RelayRandomButtonDocumentIcon css={css({ marginRight: `${size['6xs']}` })} />
        랜덤 선택
      </Button>
    </section>
  );
};

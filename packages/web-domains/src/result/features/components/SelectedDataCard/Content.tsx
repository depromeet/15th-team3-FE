'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { mostAnsweredButtonCss, mostAnsweredTitleCss, withMyMembersCss } from './styles';
import { Fragment } from 'react/jsx-runtime';
import { Profile, ProfileProps } from './Profile';
import { Children, PropsWithChildren } from 'react';

interface MostAnsweredProps {
  title: string;
}

export const MostAnswered = (props: MostAnsweredProps) => {
  const { title } = props;

  return (
    <Fragment>
      <Txt typography="heading1" color={colors.tertiary500} css={mostAnsweredTitleCss}>
        {title}
      </Txt>
      <Button css={mostAnsweredButtonCss}>전체 통계보기</Button>
    </Fragment>
  );
};

export const WithMeMembers = (props: PropsWithChildren) => {
  const { children } = props;

  return <div css={withMyMembersCss}>{children}</div>;
};

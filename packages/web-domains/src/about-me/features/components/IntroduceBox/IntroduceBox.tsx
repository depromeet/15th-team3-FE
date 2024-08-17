import { Txt } from '@sambad/sds/components';
import { Fragment } from 'react/jsx-runtime';

import { subTitleAttribute } from '../../containers/constants';
import { titleCss } from '../../containers/styles';

import { boxCss } from './styles';

interface IntroduceBoxProps {
  content?: string;
}

export const IntroduceBox = (props: IntroduceBoxProps) => {
  const { content } = props;

  const hasContent = !!content?.length;

  if (!hasContent) return;

  return (
    <Fragment>
      <Txt typography="subtitle1" css={titleCss} {...subTitleAttribute.attribute}>
        저는 이런 사람이에요
      </Txt>
      <div css={boxCss}>
        <Txt typography="body3">{content}</Txt>
      </div>
    </Fragment>
  );
};

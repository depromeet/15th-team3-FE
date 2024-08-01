import { Txt } from '@sambad/sds/components';

import { boxCss } from './styles';

interface IntroduceBoxProps {
  content?: string;
}

export const IntroduceBox = (props: IntroduceBoxProps) => {
  const { content } = props;

  return (
    <div css={boxCss}>
      <Txt typography="body3">{content}</Txt>
    </div>
  );
};

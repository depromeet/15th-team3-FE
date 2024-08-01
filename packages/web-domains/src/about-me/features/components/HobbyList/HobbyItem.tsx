import { Txt } from '@sambad/sds/components';

import { itemCss } from './styles';

export interface HobbyItemProps {
  title: string;
}

export const HobbyItem = (props: HobbyItemProps) => {
  const { title } = props;

  const [emoji, text] = title.split(' ');

  return (
    <span css={itemCss}>
      <Txt typography="title3">{emoji}</Txt>
      <Txt typography="body3">{text}</Txt>
    </span>
  );
};

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { itemCss } from './styles';

export interface RadioLabelProps {
  title: string;
  isChecked?: boolean;
}

export const RadioLabel = (props: RadioLabelProps) => {
  const { title, isChecked } = props;

  const [emoji, text] = title.split(' ');

  return (
    <span css={itemCss}>
      <Txt typography="title3">{emoji}</Txt>
      <Txt typography={isChecked ? 'title2' : 'body2'} color={isChecked ? colors.primary500 : colors.black}>
        {text}
      </Txt>
    </span>
  );
};

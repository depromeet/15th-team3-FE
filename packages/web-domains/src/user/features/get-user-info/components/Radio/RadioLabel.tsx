import { Txt } from '@sds/components';
import { colors } from '@sds/theme';

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
      <Txt typography="body3" color={isChecked ? colors.primary500 : colors.black}>
        {text}
      </Txt>
    </span>
  );
};

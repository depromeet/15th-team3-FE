import { css } from '@emotion/react';
import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { LabelHTMLAttributes, PropsWithChildren } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  title?: string;
  subTitle?: string;
  required?: boolean;
}

export const Label = (props: PropsWithChildren<LabelProps>) => {
  const { title, subTitle, required, ...restProps } = props;

  return (
    <label css={required && labelRequriedCss} {...restProps}>
      <Txt typography="subtitle1" color="black">
        <Txt as="strong" typography="subtitle1" color={colors.primary500} style={{ marginRight: size['6xs'] }}>
          {title}
        </Txt>
        {subTitle}
      </Txt>
    </label>
  );
};

export const labelRequriedCss = css({
  '&::after': { content: `"*"`, marginLeft: '4px', color: colors.primary500 },
});

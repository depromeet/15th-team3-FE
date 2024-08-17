import { Txt } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';
import { CSSProperties } from 'react';

interface FormTitleProps {
  title: string;
  subTitle?: string;
  isRequired?: boolean;
  style?: CSSProperties;
}

export const FormTitle = (props: FormTitleProps) => {
  const { title, subTitle, isRequired = false, style } = props;

  return (
    <header style={{ padding: '0 20px', ...style }}>
      <Txt as="h2" typography="heading1" color={colors.black}>
        {title}
      </Txt>
      <Txt as="p" typography="heading1" color={colors.black}>
        {subTitle}
      </Txt>
      <Txt as="p" typography="body3" color={colors.grey600} style={{ marginTop: size['7xs'] }}>
        <Txt as="strong" typography="body3" color={colors.primary500}>
          {isRequired ? '필수 답변 ' : '선택 답변 '}
        </Txt>
        항목이에요
      </Txt>
    </header>
  );
};

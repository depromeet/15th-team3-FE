'use client';
import { css } from '@emotion/react';
import { Txt, Button } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

import { buttonWrapperCss } from './styles';

interface IntroFormType {
  introduction: string;
}

export const IntroInfoForm = () => {
  const searchParams = useSearchParams();
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<IntroFormType>({ defaultValues: { introduction: '' } });

  const maxLength = 3000;

  const onChangeTextArea = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
  };

  const handleSubmitJoin = (data: IntroFormType) => {
    const _data = { ...data, ...Object.fromEntries(searchParams.entries()) };
    console.log(_data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitJoin)} css={{ padding: '0 20px', marginTop: '48px' }}>
      <textarea
        placeholder="저는 이런 사람이에요."
        {...register('introduction', { maxLength, onChange: onChangeTextArea })}
        css={textAreaCss}
      ></textarea>
      <Txt as="p" typography="body4" color={colors.grey600}>
        최대 {maxLength}자까지 입력해주세요
      </Txt>
      <div css={buttonWrapperCss}>
        <Button type="submit" size="large" disabled={!isValid}>
          완료
        </Button>
      </div>
    </form>
  );
};

const textAreaCss = css({
  width: '100%',
  height: '200px',
  padding: '12px 16px',
  backgroundColor: colors.grey200,
  border: `1px solid ${colors.grey400}`,
  borderRadius: borderRadiusVariants.medium,
  ':focus': { outline: `1px solid ${colors.grey600}` },
});

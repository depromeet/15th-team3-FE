'use client';

import { Txt, Button } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';
import { useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { STEPS } from '../../../../common/constants/step';
import { useFormQueryString } from '../../hooks/useFormQueryString';
import { RadioGroup } from '../Radio/';
import { TextInput } from '../TextInput/TextInput';

import { buttonWrapperCss } from './styles';

export interface BasicInfo {
  name: string;
  birth: string;
  gender: string;
}

export const BasicInfoForm = () => {
  const searchParams = useSearchParams();
  const { updateUrlParams } = useFormQueryString();

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<BasicInfo>({
    defaultValues: {
      name: searchParams.get('name') || '',
      birth: searchParams.get('birth') || '',
      gender: searchParams.get('gender') || '',
    },
  });

  const goToNextPage = (data: BasicInfo) => {
    updateUrlParams(STEPS.EXTRA_INFO, data);
  };

  return (
    <form
      onSubmit={handleSubmit(goToNextPage)}
      css={{
        padding: '0 20px',
        marginTop: '48px',
        '& > *:not(:first-of-type)': {
          marginTop: '32px',
        },
      }}
    >
      <TextInput
        label="이름이 무엇인가요?"
        answerNumber={1}
        placeholder="이름을 입력해주세요"
        errorMessage="2자 이상, 5자 이하로 입력해주세요."
        {...register('name', { required: true, minLength: 2, maxLength: 5 })}
      />
      <TextInput
        label="생년월일이 언제이신가요?"
        answerNumber={2}
        placeholder="생년월일 8자리를 입력해주세요."
        {...register('birth', {
          required: true,
          maxLength: 8,
          pattern: {
            value: /^\d{8}$/,
            message: '생년월일은 숫자 8자리여야 합니다.',
          },
        })}
      />
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          <Txt color={colors.black} typography="subtitle1">
            <Txt as="strong" color={colors.primary500} typography="subtitle1" css={{ marginRight: size['6xs'] }}>
              #03
            </Txt>
            성별이 무엇인가요?
          </Txt>
        </label>
        <div css={{ display: 'inline-flex', gap: '8px', marginTop: size['6xs'] }}>
          <Controller
            name="gender"
            control={control}
            rules={{ validate: (value) => value === 'MALE' || value === 'FEMALE' }}
            render={({ field: { onChange, value } }) => (
              <RadioGroup value={value} onChange={onChange}>
                <RadioGroup.Item label="🙋‍♂️ 남자" value="MALE" />
                <RadioGroup.Item label="🙋‍♀️ 여자" value="FEMALE" />
              </RadioGroup>
            )}
          />
        </div>
      </div>
      <div css={buttonWrapperCss}>
        <Button type="submit" size="large" disabled={!isValid}>
          다음
        </Button>
      </div>
    </form>
  );
};

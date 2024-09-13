'use client';

import { Txt, Button } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';
import { useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { STEPS } from '@/user/common/constants/step';

import { useGoNextStep } from '../../hooks/useGoNextStep';
import { RadioGroup } from '../Radio/';
import { TextInput } from '../TextInput/TextInput';

import { buttonWrapperCss, formLayoutcss } from './styles';

export interface BasicInfo {
  userName: string;
  birth: string;
  gender: string;
}

export const BasicInfoForm = () => {
  const searchParams = useSearchParams();
  const { goFormNextStep } = useGoNextStep();

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<BasicInfo>({
    defaultValues: {
      userName: searchParams.get('userName') || '',
      birth: searchParams.get('birth') || '',
      gender: searchParams.get('gender') || '',
    },
    mode: 'onTouched',
  });

  const goToNextPage = (data: BasicInfo) => {
    goFormNextStep(STEPS.EXTRA_INFO, data);
  };

  return (
    <form onSubmit={handleSubmit(goToNextPage)} css={formLayoutcss}>
      <TextInput
        label="이름이 무엇인가요?"
        answerNumber={1}
        placeholder="이름을 입력해주세요"
        hintMessage="2자 이상, 5자 이하로 입력해주세요"
        error={errors.userName}
        maxLength={5}
        {...register('userName', {
          required: true,
          minLength: 2,
          maxLength: 5,
          pattern: /^\S.*\S$/,
        })}
      />
      <TextInput
        label="생년월일을 입력해주세요"
        answerNumber={2}
        error={errors.birth}
        placeholder="생년월일 8자리를 입력해주세요"
        maxLength={8}
        {...register('birth', {
          required: true,
          maxLength: 8,
          pattern: {
            value: /^\d{8}$/,
            message: '생년월일 8자리를 입력해주세요',
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
                <RadioGroup.Item
                  value="MALE"
                  label={(isChecked) => <RadioGroup.Label title="🙋‍♂️ 남자" isChecked={isChecked} />}
                />
                <RadioGroup.Item
                  value="FEMALE"
                  label={(isChecked) => <RadioGroup.Label title="🙋‍♀️ 여자" isChecked={isChecked} />}
                />
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

'use client';

import { Button } from '@sambad/sds/components';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { STEPS } from '@/user/common/constants/step';

import { useGoNextStep } from '../../hooks/useGoNextStep';
import { TextInput } from '../TextInput/TextInput';

import { buttonWrapperCss, formLayoutcss } from './styles';

interface ExtraInfo {
  job: string;
  location: string;
}

export const ExtraInfoForm = () => {
  const searchParams = useSearchParams();
  const { goFormNextStep } = useGoNextStep();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ExtraInfo>({
    defaultValues: {
      job: searchParams.get('job') || '',
      location: searchParams.get('location') || '',
    },
    mode: 'onTouched',
  });

  const goToNextPage = (data: ExtraInfo) => {
    goFormNextStep(STEPS.HOBBIES_INFO, data);
  };

  return (
    <form onSubmit={handleSubmit(goToNextPage)} css={formLayoutcss}>
      <TextInput
        label="직업이 무엇인가요?"
        answerNumber={4}
        placeholder="예) 돈 많은 백수"
        maxLength={15}
        error={errors.job}
        hintMessage="1자 이상, 15자 이하로 입력해주세요"
        {...register('job', {
          required: true,
          minLength: 1,
          maxLength: 15,
          validate: (value) => (value.trim().length >= 1 ? true : false),
        })}
      />
      <TextInput
        answerNumber={5}
        label="어디에 거주하고 계신가요?"
        maxLength={15}
        error={errors.location}
        placeholder="예) 사랑시 고백구 행복동"
        hintMessage="1자 이상, 15자 이하로 입력해주세요"
        {...register('location', {
          required: true,
          minLength: 1,
          maxLength: 15,
          validate: (value) => (value.trim().length >= 1 ? true : false),
        })}
      />
      <div css={buttonWrapperCss}>
        <Button type="submit" size="large" disabled={!isValid}>
          다음
        </Button>
      </div>
    </form>
  );
};

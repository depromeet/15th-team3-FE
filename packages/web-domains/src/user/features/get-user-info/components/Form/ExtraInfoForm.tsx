'use client';

import { Button } from '@sambad/sds/components';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { STEPS } from '@/user/common/constants/step';

import { useGoNextStep } from '../../hooks/useGoNextStep';
import { TextInput } from '../TextInput/TextInput';

import { buttonWrapperCss } from './styles';

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
    formState: { isValid },
  } = useForm<ExtraInfo>({
    defaultValues: {
      job: searchParams.get('job') || '',
      location: searchParams.get('location') || '',
    },
  });

  const goToNextPage = (data: ExtraInfo) => {
    goFormNextStep(STEPS.HOBBIES_INFO, data);
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
        label="직업이 무엇인가요?"
        answerNumber={4}
        placeholder="예) 돈 많은 백수"
        maxLength={15}
        errorMessage="1자 이상, 15자 이하로 입력해주세요"
        {...register('job', {
          required: true,
          minLength: 1,
          maxLength: 15,
          pattern: /^\S.*\S$/,
        })}
      />
      <TextInput
        answerNumber={5}
        label="어디에 거주하고 계신가요?"
        maxLength={15}
        placeholder="예) 사랑시 고백구 행복동"
        errorMessage="1자 이상, 15자 이하로 입력해주세요"
        {...register('location', {
          required: true,
          minLength: 1,
          maxLength: 15,
          pattern: /^\S.*\S$/,
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

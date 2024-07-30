'use client';

import { Button } from '@sambad/sds/components';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { STEPS } from '../../../../common/constants/step';
import { TextInput } from '../TextInput/TextInput';

import { buttonWrapperCss } from './styles';

interface ExtraInfo {
  job: string;
  location: string;
}

export const ExtraInfoForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    const currentParams = Object.fromEntries(searchParams.entries());
    history.replaceState(null, '', `?${new URLSearchParams({ ...currentParams, step: STEPS.EXTRA_INFO, ...data })}`);
    router.push(`?${new URLSearchParams({ ...currentParams, step: STEPS.HOBBIES_INFO, ...data })}`);
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
        placeholder="직업을 입력해주세요"
        errorMessage="1자 이상, 15자 이하로 입력해주세요."
        {...register('job', { required: true, minLength: 1, maxLength: 15 })}
      />
      <TextInput
        answerNumber={5}
        label="어디에 거주하고 계신가요?"
        placeholder="거주 지역을 입력해주세요."
        errorMessage="1자 이상, 15자 이하로 입력해주세요."
        {...register('location', { required: true, minLength: 1, maxLength: 15 })}
      />
      <div css={buttonWrapperCss}>
        <Button type="submit" size="large" disabled={!isValid}>
          다음
        </Button>
      </div>
    </form>
  );
};

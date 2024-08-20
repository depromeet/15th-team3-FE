'use client';

import { Button } from '@sambad/sds/components';
import { useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { MBTI_TYPE } from '@/user/common/constants/mbti';
import { STEPS } from '@/user/common/constants/step';

import { useGoNextStep } from '../../hooks/useGoNextStep';
import { RadioGroup } from '../Radio';

import { buttonWrapperCss } from './styles';

interface MbtiFormType {
  mbti: string;
}

export const MbtiInfoForm = () => {
  const searchParams = useSearchParams();
  const { goFormNextStep } = useGoNextStep();
  const { handleSubmit, control } = useForm<MbtiFormType>({
    defaultValues: {
      mbti: searchParams.get('mbti') || '',
    },
  });

  const goToNextPage = (data: MbtiFormType) => {
    goFormNextStep(STEPS.INTRO_INFO, data);
  };

  return (
    <form onSubmit={handleSubmit(goToNextPage)} css={{ padding: '0 20px', marginTop: '48px' }}>
      <div css={{ display: 'inline-flex', flexWrap: 'wrap', gap: '10px' }}>
        <Controller
          name="mbti"
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup value={value} onChange={onChange}>
              {MBTI_TYPE.map(({ label, value }) => (
                <RadioGroup.Item
                  key={value}
                  value={value}
                  label={(isChecked) => <RadioGroup.Label title={label} isChecked={isChecked} />}
                />
              ))}
            </RadioGroup>
          )}
        />
      </div>
      <div css={buttonWrapperCss}>
        <Button type="submit" size="large">
          다음
        </Button>
      </div>
    </form>
  );
};

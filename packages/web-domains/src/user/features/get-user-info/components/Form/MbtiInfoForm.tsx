'use client';

import { Button } from '@sambad/sds/components';
import { useRouter, useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { MBTI_TYPE } from '../../../../common/constants/mbti';
import { STEPS } from '../../../../common/constants/step';
import { RadioGroup, Radio } from '../Radio';

import { buttonWrapperCss } from './styles';

interface MbtiFormType {
  mbti: string;
}
export const MbtiInfoForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handleSubmit, control } = useForm<MbtiFormType>({
    defaultValues: {
      mbti: searchParams.get('mbti') || '',
    },
  });

  const goToNextPage = (data: MbtiFormType) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    history.replaceState(null, '', `?${new URLSearchParams({ ...currentParams, step: STEPS.MBTI_IFNO, ...data })}`);
    router.push(`?${new URLSearchParams({ ...currentParams, step: STEPS.INTRO_INFO, ...data })}`);
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
                <Radio key={value} label={label} value={value} />
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

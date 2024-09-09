'use client';

import { Button } from '@sambad/sds/components';
import { useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { HobbyType } from '@/common/apis/queries/useGetHobbyList';
import { STEPS } from '@/user/common/constants/step';

import { useGoNextStep } from '../../hooks/useGoNextStep';
import { CheckboxGroup } from '../Checkbox';

import { buttonWrapperCss, formLayoutcss } from './styles';

interface HobbiesFormProps {
  hobbyList?: HobbyType[];
}

interface Hobbies {
  hobbyIds: (string | number)[];
}

export const HobbiesInfoForm = ({ hobbyList }: HobbiesFormProps) => {
  const searchParams = useSearchParams();
  const { goFormNextStep } = useGoNextStep();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<Hobbies>({
    defaultValues: {
      hobbyIds: searchParams.get('hobbyIds')?.split(',').map(Number) || [],
    },
  });

  const goToNextPage = (data: Hobbies) => {
    const { hobbyIds } = data;
    goFormNextStep(STEPS.MBTI_IFNO, { hobbyIds: hobbyIds.toString() });
  };

  if (!hobbyList || !hobbyList.length) return null;

  return (
    <form onSubmit={handleSubmit(goToNextPage)} css={formLayoutcss}>
      <div css={{ display: 'inline-flex', flexWrap: 'wrap', gap: '10px' }}>
        <Controller
          name="hobbyIds"
          control={control}
          rules={{
            validate: (value) => value.length <= 3 || '최대 3개까지 선택할 수 있습니다',
          }}
          render={({ field: { value, onChange } }) => (
            <CheckboxGroup value={value} onValueChange={onChange} maxLength={3}>
              {hobbyList?.map(({ hobbyId, content }) => (
                <CheckboxGroup.Item
                  key={hobbyId}
                  label={(isChecked) => <CheckboxGroup.Label isChecked={isChecked} title={content} />}
                  value={hobbyId}
                />
              ))}
            </CheckboxGroup>
          )}
        ></Controller>
      </div>
      <div css={buttonWrapperCss}>
        <Button type="submit" size="large" disabled={!isValid}>
          다음
        </Button>
      </div>
    </form>
  );
};

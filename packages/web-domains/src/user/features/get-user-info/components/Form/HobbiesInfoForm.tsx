'use client';

import { Button } from '@sambad/sds/components';
import { useRouter, useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { HobbyType } from '../../../../../common/apis/schema/HobbyListResponse';
import { STEPS } from '../../../../common/constants/step';
import { CheckboxGroup } from '../Checkbox';

import { buttonWrapperCss } from './styles';

interface HobbiesFormProps {
  hobbyList?: HobbyType[];
}

interface Hobbies {
  hobbyIds: (string | number)[];
}

export const HobbiesInfoForm = ({ hobbyList }: HobbiesFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    const hobbyIdsString = hobbyIds.toString();
    const currentParams = Object.fromEntries(searchParams.entries());
    history.replaceState(
      null,
      '',
      `?${new URLSearchParams({ ...currentParams, step: STEPS.HOBBIES_INFO, hobbyIds: hobbyIdsString })}`,
    );
    router.push(`?${new URLSearchParams({ ...currentParams, step: STEPS.MBTI_IFNO, hobbyIds: hobbyIdsString })}`);
  };

  if (!hobbyList || !hobbyList.length) return null;

  return (
    <form onSubmit={handleSubmit(goToNextPage)} css={{ padding: '0 20px', marginTop: '48px' }}>
      <div css={{ display: 'inline-flex', flexWrap: 'wrap', gap: '10px' }}>
        <Controller
          name="hobbyIds"
          control={control}
          rules={{
            validate: (value) => value.length <= 3 || '최대 3개까지 선택할 수 있습니다.',
          }}
          render={({ field: { value, onChange } }) => (
            <CheckboxGroup value={value} onValueChange={onChange}>
              {hobbyList?.map(({ hobbyId, content }) => (
                <CheckboxGroup.Item key={hobbyId} label={content} value={hobbyId} />
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

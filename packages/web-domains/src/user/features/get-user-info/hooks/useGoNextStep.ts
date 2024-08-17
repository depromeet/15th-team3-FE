import { useRouter } from 'next/navigation';

import { StepType } from '@/user/common/constants/step';
import { useQueryString, QueryParams } from '@/user/common/hooks/useQueryString';

export const useGoNextStep = () => {
  const router = useRouter();
  const { addQueryString } = useQueryString();

  const goFormNextStep = (step: StepType | string, params: QueryParams) => {
    const currentParams = addQueryString(params);
    history.replaceState(null, '', `?${currentParams.toString()}`);
    currentParams.set('step', step);
    router.push(`?${currentParams.toString()}`);
  };

  return { goFormNextStep };
};

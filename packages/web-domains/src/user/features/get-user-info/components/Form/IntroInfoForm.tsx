'use client';

import { Txt, Button } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Params } from '@/common/apis/queries/useCreateMeetingMember';
import { dateFormat } from '@/user/common/utils/format';

import { useFormQueryString } from '../../hooks/useFormQueryString';
import { useGetRoleName } from '../../hooks/useGetRoleName';
import { useMeetingMemberService } from '../../services/useMeetingMemberService';
import { TextArea } from '../TextInput/TextArea';

import { buttonWrapperCss } from './styles';

interface IntroFormType {
  introduction: string;
}

const MAX_LENGTH = 3000;

export const IntroInfoForm = () => {
  const router = useRouter();
  const { addQueryString, getQueryStringObject } = useFormQueryString();
  const role = useGetRoleName();
  const { handleParticipateMeeting } = useMeetingMemberService();

  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<IntroFormType>({ defaultValues: { introduction: '' } });

  const handleSubmitJoin = async (data: IntroFormType) => {
    const currentQuery = addQueryString(data);
    currentQuery.delete('step');
    // 모임장인 경우 모임생성 후 모임 가입
    if (role.params === 'OWNER') {
      router.push(`/meeting/new?${currentQuery}`);
    }
    // 모임원인 경우 모임 가입
    else {
      const searchParamsObject = getQueryStringObject();
      const params: Params = {
        ...searchParamsObject,
        role: role.params,
        hobbyIds: searchParamsObject.hobbyIds ? searchParamsObject.hobbyIds.split(',').map(Number) : [],
        birth: dateFormat(searchParamsObject.birth),
      } as Params;
      if (data.introduction) {
        params.introduction = data.introduction;
      }
      await handleParticipateMeeting(params);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitJoin)} css={{ padding: '0 20px', marginTop: '48px' }}>
      <TextArea
        maxLength={MAX_LENGTH}
        placeholder="저는 이런 사람이에요."
        {...register('introduction', { maxLength: MAX_LENGTH })}
      />
      <Txt as="p" typography="body4" color={colors.grey600}>
        최대 {MAX_LENGTH}자까지 입력해주세요
      </Txt>
      <div css={buttonWrapperCss}>
        <Button type="submit" size="large" disabled={!isValid}>
          완료
        </Button>
      </div>
    </form>
  );
};

'use client';

import { Txt, Button } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { useForm } from 'react-hook-form';

import { Params as MeetingParams } from '@/common/apis/queries/useCreateMeeting';
import { Params as MeetingMemberParams } from '@/common/apis/queries/useCreateMeetingMember';
import { dateFormat } from '@/user/common/utils/format';

import { useQueryString } from '../../../../common/hooks/useQueryString';
import { useGetRoleName } from '../../hooks/useGetRoleName';
import { useCreateMeetingService } from '../../services/useCreateMeetingService';
import { useMeetingMemberService } from '../../services/useMeetingMemberService';
import { TextArea } from '../TextInput/TextArea';

import { buttonWrapperCss } from './styles';

interface IntroFormType {
  introduction: string;
}

const MAX_LENGTH = 3000;

export const IntroInfoForm = () => {
  const role = useGetRoleName();
  const { getQueryStringObj } = useQueryString();
  const { createMeeting } = useCreateMeetingService();
  const { participateMeeting } = useMeetingMemberService();

  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<IntroFormType>({ defaultValues: { introduction: '' } });

  const handleParticipateMeeting = async ({ introduction }: IntroFormType) => {
    const { meetingName, meetingTypeIds, ...queryStringObj } = getQueryStringObj();

    const meetingMemberParams = {
      ...queryStringObj,
      name: queryStringObj.userName,
      role: role.params,
      hobbyIds: queryStringObj.hobbyIds ? queryStringObj.hobbyIds.split(',').map(Number) : [],
      birth: dateFormat(queryStringObj.birth),
    } as MeetingMemberParams;
    if (introduction) {
      meetingMemberParams.introduction = introduction;
    }

    // 모임장인 경우 모임생성 후 초대코드 모임 가입
    if (role.params === 'OWNER') {
      const meetingParams = {
        name: meetingName,
        meetingTypeIds: meetingTypeIds ? meetingTypeIds.split(',').map(Number) : [],
      } as MeetingParams;

      createMeeting(meetingParams, meetingMemberParams);
    }
    // 모임원인 경우 모임 가입 초대코드
    if (role.params === 'MEMBER') {
      participateMeeting(meetingMemberParams);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleParticipateMeeting)} css={{ padding: '0 20px', marginTop: '48px' }}>
      <TextArea
        maxLength={MAX_LENGTH}
        placeholder="저는 이런 사람이에요"
        {...register('introduction', { maxLength: MAX_LENGTH, pattern: /^\S.*\S$/ })}
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

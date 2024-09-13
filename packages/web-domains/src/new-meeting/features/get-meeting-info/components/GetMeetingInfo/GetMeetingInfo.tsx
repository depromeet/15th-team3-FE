import { Button } from '@sambad/sds/components';
import { useForm } from 'react-hook-form';

import useCustomSearchParams from '@/new-meeting/common/hooks/useCustomSearchParams';

import { TextField } from '../TextField/TextField';

import { buttonWrapperCss } from './styles';

interface MeetingInfo {
  meetingName: string;
}

export const GetMeetingInfo = () => {
  const { updateUrlParams, getCurrentQueryString } = useCustomSearchParams();
  const searchParams = getCurrentQueryString();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<MeetingInfo>({
    defaultValues: {
      meetingName: searchParams.get('meetingName') || '',
    },
  });

  const handleNewMeeting = ({ meetingName }: MeetingInfo) => {
    const params = {
      meetingName,
    };
    updateUrlParams('/user/owner/start', params);
  };

  return (
    <section css={{ padding: '0 20px', marginTop: '48px', paddingBottom: '100px' }}>
      <form onSubmit={handleSubmit(handleNewMeeting)}>
        <TextField
          {...register('meetingName', {
            required: '이름은 필수 입력 사항입니다',
            minLength: { value: 2, message: '2자 이상 입력해주세요' },
            maxLength: { value: 10, message: '10자 이하로 입력해주세요' },
            pattern: /^\S.*\S$/,
          })}
          maxLength={10}
          errorMessage="2자 이상, 10자 이하로 입력해주세요"
          placeholder="모임의 이름을 입력해주세요"
          css={{ marginTop: '8px' }}
        />
        <div css={buttonWrapperCss}>
          <Button type="submit" size="large" disabled={!isValid}>
            완료
          </Button>
        </div>
      </form>
    </section>
  );
};

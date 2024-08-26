import { Txt, Button } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { Controller, useForm } from 'react-hook-form';

import { MeetingType } from '@/common/apis/queries/useGetMeetingTypes';
import useCustomSearchParams from '@/new-meeting/common/hooks/useCustomSearchParams';

import { CheckboxGroup } from '../Checkbox';
import { Label } from '../Label/Label';
import { TextField } from '../TextField/TextField';

import { buttonWrapperCss } from './styles';

interface GetMeetingInfoProps {
  meetingTypes?: MeetingType[];
}

interface MeetingInfo {
  meetingName: string;
  meetingTypeIds: number[];
}

export const GetMeetingInfo = (props: GetMeetingInfoProps) => {
  const { meetingTypes } = props;

  const { updateUrlParams, getCurrentQueryString } = useCustomSearchParams();
  const searchParams = getCurrentQueryString();

  const {
    register,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<MeetingInfo>({
    defaultValues: {
      meetingName: searchParams.get('meetingName') || '',
      meetingTypeIds: searchParams.get('meetingTypeIds')?.split(',').map(Number) || [],
    },
  });

  const handleNewMeeting = ({ meetingName, meetingTypeIds }: MeetingInfo) => {
    const params = {
      meetingName,
      meetingTypeIds: meetingTypeIds.toString(),
    };
    updateUrlParams('/user/owner/start', params);
  };

  if (!meetingTypes || meetingTypes.length < 0) {
    return null;
  }

  return (
    <section css={{ padding: '0 20px', marginTop: '48px' }}>
      <form onSubmit={handleSubmit(handleNewMeeting)}>
        <div>
          <Label title="#01" subTitle="모임의 이름은 무엇인가요?" />
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
        </div>
        <div>
          <Label title="#02" subTitle="어떤 모임인가요?" css={{ display: 'block', marginTop: '32px' }} />
          <div css={{ display: 'inline-flex', gap: '4px', marginTop: '8px', flexWrap: 'wrap' }}>
            <Controller
              name="meetingTypeIds"
              control={control}
              rules={{
                validate: (value) => value.length <= 2 || '최대 2개까지 선택해주세요',
              }}
              render={({ field: { value, onChange } }) => (
                <CheckboxGroup value={value} onValueChange={onChange} maxLength={2}>
                  {meetingTypes?.map((type, idx) => (
                    <CheckboxGroup.Item
                      key={idx}
                      value={type.meetingTypeId}
                      label={(isChecked) => <CheckboxGroup.Label title={type.content} isChecked={isChecked} />}
                    />
                  ))}
                </CheckboxGroup>
              )}
            />
          </div>
          <Txt as="p" typography="body4" color={colors.grey600} css={{ marginTop: size['7xs'] }}>
            최대 2개까지만 선택해주세요
          </Txt>
        </div>
        <div css={buttonWrapperCss}>
          <Button type="submit" size="large" disabled={!isValid}>
            완료
          </Button>
        </div>
      </form>
    </section>
  );
};

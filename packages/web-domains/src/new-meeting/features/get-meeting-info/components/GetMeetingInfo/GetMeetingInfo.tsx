import { Txt, Button } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { Controller, useForm } from 'react-hook-form';

import { MeetingType } from '@/common/apis/schema/MeetingTypesResponse';

import { useCreateMeetingService } from '../../services/useCreateMeetingService';
import { CheckboxGroup } from '../Checkbox';
import { Label } from '../Label/Label';
import { TextField } from '../TextField/TextField';

import { buttonWrapperCss } from './styles';

interface GetMeetingInfoProps {
  meetingTypes?: MeetingType[];
}

interface MeetingInfo {
  name: string;
  meetingTypeIds: number[];
}

export const GetMeetingInfo = (props: GetMeetingInfoProps) => {
  const { meetingTypes } = props;

  const {
    register,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<MeetingInfo>({
    defaultValues: {
      name: '',
      meetingTypeIds: [],
    },
  });

  const { handleCreateMeeting } = useCreateMeetingService();

  const handleNewMeeting = async ({ name, meetingTypeIds }: MeetingInfo) => {
    handleCreateMeeting({ name, meetingTypeIds });
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
            {...register('name', {
              required: '이름은 필수 입력 사항입니다.',
              minLength: { value: 2, message: '2자 이상 입력해주세요.' },
              maxLength: { value: 10, message: '10자 이하로 입력해주세요.' },
            })}
            errorMessage="2자 이상, 10자 이하로 입력해주세요"
            placeholder="직업을 입력해주세요"
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
                validate: (value) => value.length <= 2 || '최대 2개까지 선택해주세요.',
              }}
              render={({ field: { value, onChange } }) => (
                <CheckboxGroup value={value} onValueChange={onChange}>
                  {meetingTypes?.map((type, idx) => (
                    <CheckboxGroup.Item key={idx} label={type.content} value={type.meetingTypeId} />
                  ))}
                </CheckboxGroup>
              )}
            />
          </div>
          <Txt as="p" typography="body4" color={colors.grey500} css={{ marginTop: size['7xs'] }}>
            최대 2개까지만 선택해주세요.
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

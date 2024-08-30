import { Txt, Button } from '@sds/components';
import { colors } from '@sds/theme';
import { useForm } from 'react-hook-form';

import { buttonWrapperCss } from '../../get-user-info/components/Form/styles';
import { TextArea } from '../../get-user-info/components/TextInput/TextArea';
import { useModifyUserInfoService } from '../services/useModifyUserInfoService';

export interface IntroFormType {
  introduction: string;
}

const MAX_LENGTH = 3000;

export const ModifyIntroForm = () => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<IntroFormType>({ defaultValues: { introduction: '' } });

  const { handleModifyUserInfo } = useModifyUserInfoService();

  return (
    <form onSubmit={handleSubmit(handleModifyUserInfo)} css={{ padding: '0 20px', marginTop: '48px' }}>
      <TextArea
        placeholder="저는 이런 사람이에요."
        maxLength={MAX_LENGTH}
        {...register('introduction', {
          maxLength: MAX_LENGTH,
        })}
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

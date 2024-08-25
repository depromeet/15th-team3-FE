import { FormTitle } from '../../get-user-info/components/Form';
import { ModifyIntroForm } from '../components/ModifyIntroForm';

export const ModifyUserIntroContainer = () => {
  return (
    <>
      <FormTitle title="자유롭게 하고싶은 말을" subTitle="작성해주세요" style={{ paddingTop: '28px' }} />
      <ModifyIntroForm />
    </>
  );
};

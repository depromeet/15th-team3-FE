import { FormTitle, IntroInfoForm } from '../components/Form';

export const GetUserIntroContainer = () => {
  return (
    <>
      <FormTitle title="자유롭게 하고싶은 말을" subTitle="작성해주세요" style={{ paddingTop: '28px' }} />
      <IntroInfoForm />
    </>
  );
};

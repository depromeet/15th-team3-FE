import { FormTitle, ExtraInfoForm } from '../components/Form';

export const GetUserExtraInfoContainer = () => {
  return (
    <>
      <FormTitle title="본인에 대해서" subTitle="간단하게 소개해주세요!" isRequired style={{ paddingTop: '28px' }} />
      <ExtraInfoForm />
    </>
  );
};

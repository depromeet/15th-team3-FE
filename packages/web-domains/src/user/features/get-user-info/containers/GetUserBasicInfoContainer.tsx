import { FormTitle, BasicInfoForm } from '../components/Form';

export const GetUserBasicInfoContainer = () => {
  return (
    <>
      <FormTitle title="본인에 대해서" subTitle="간단하게 소개해주세요!" isRequired style={{ paddingTop: '28px' }} />
      <BasicInfoForm />
    </>
  );
};

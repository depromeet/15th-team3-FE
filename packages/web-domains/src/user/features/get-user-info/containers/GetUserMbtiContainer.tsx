import { FormTitle, MbtiInfoForm } from '../components/Form';

export const GetUserMbtiContainer = () => {
  return (
    <>
      <FormTitle title="MBTI가 무엇인가요?" style={{ paddingTop: '28px' }} />
      <MbtiInfoForm />
    </>
  );
};

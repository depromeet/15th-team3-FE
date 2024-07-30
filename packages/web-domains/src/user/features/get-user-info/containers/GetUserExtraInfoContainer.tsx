import { FormTitle, ExtraInfoForm } from '../components/Form';
import { useGetRoleName } from '../hooks/useGetRoleName';

export const GetUserExtraInfoContainer = () => {
  const { roleName } = useGetRoleName();

  return (
    <>
      <FormTitle
        title={`어떤 ${roleName}인지`}
        subTitle="간단하게 소개해주세요!"
        isRequired
        style={{ paddingTop: '28px' }}
      />
      <ExtraInfoForm />
    </>
  );
};

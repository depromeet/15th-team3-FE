import { FormTitle, BasicInfoForm } from '../components/Form';
import { useGetRoleName } from '../hooks/useGetRoleName';

export const GetUserBasicInfoContainer = () => {
  const role = useGetRoleName();
  return (
    <>
      <FormTitle
        title={`어떤 ${role.name}인지`}
        subTitle="간단하게 소개해주세요!"
        isRequired
        style={{ paddingTop: '28px' }}
      />
      <BasicInfoForm />
    </>
  );
};

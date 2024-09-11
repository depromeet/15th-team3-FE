import { FormTitle, HobbiesInfoForm } from '../components/Form';
import { useHobbyListService } from '../services/useHobbyListService';

export const GetUserHobbiesContainer = () => {
  const { hobbyList } = useHobbyListService();

  return (
    <>
      <FormTitle title="즐기는 취미를" subTitle="자유롭게 선택해주세요" style={{ paddingTop: '28px' }} />
      <HobbiesInfoForm hobbyList={hobbyList} />
    </>
  );
};

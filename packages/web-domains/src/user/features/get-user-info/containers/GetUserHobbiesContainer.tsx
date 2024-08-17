import { FormTitle, HobbiesInfoForm } from '../components/Form';
import { useHobbyListService } from '../services/useHobbyListService';

export const GetUserHobbiesContainer = () => {
  const { hobbyList } = useHobbyListService();

  return (
    <>
      <FormTitle title="취미를 최대" subTitle="세 개 까지만 선택해주세요" style={{ paddingTop: '28px' }} />
      <HobbiesInfoForm hobbyList={hobbyList} />
    </>
  );
};

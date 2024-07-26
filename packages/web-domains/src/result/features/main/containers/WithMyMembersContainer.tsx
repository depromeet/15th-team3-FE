import { size } from '@sambad/sds/theme';
import { SelectedDataCard, WithMeMembers } from '../components';

export const WithMyMembersContainers = () => {
  return (
    <SelectedDataCard title="나와 같이 축구, 농구, 수영을 선택한 모임원은?" style={{ marginTop: size['2xs'] }}>
      <WithMeMembers
        count={5}
        members={[
          { name: '이세민', imgUrl: '', id: 1 },
          { name: '이세민', imgUrl: '', id: 1 },
        ]}
      />
    </SelectedDataCard>
  );
};

import { SelectedDataCard, MostAnswered, CountByMemberList } from '../components';

export const MostAnsweredContainers = () => {
  return (
    <SelectedDataCard title="모임원들이 가장 많이 한 답변은?">
      <MostAnswered title="축구" />
      <CountByMemberList showName="장종오" count={18} showCharacter />
    </SelectedDataCard>
  );
};

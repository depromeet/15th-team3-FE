import { FirstFeatureOfSecondDomainTestContainer } from "../features/containers/FirstFeatureOfSecondDomainTestContainer";

export const SecondDomainExampleScreen = () => {
  return (
    <div>
      <h1>도메인 화면을 전체 담당 하는 컴포넌트입니다.</h1>
      <FirstFeatureOfSecondDomainTestContainer />
    </div>
  );
};

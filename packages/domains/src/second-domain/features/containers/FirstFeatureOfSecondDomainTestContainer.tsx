"use client";

import { FirstFeatureOfSecondDomainTestBox } from "../components/FirstFeatureOfSecondDomainTestBox";
import { FirstFeatureOfSecondDomainTestButton } from "../components/FirstFeatureOfSecondDomainTestButton";
import { useFirstFeatureOfSecondDomainService } from "../services/useFirstFeatureOfSecondDomainTestService";

export const FirstFeatureOfSecondDomainTestContainer = () => {
  const { displayText, handleChangeDisplayText } =
    useFirstFeatureOfSecondDomainService();

  return (
    <FirstFeatureOfSecondDomainTestBox
      displayText={displayText}
      onClick={handleChangeDisplayText}
    >
      <FirstFeatureOfSecondDomainTestButton
        onClick={() => {
          alert("Button is Clicked at Container");
        }}
      />
    </FirstFeatureOfSecondDomainTestBox>
  );
};

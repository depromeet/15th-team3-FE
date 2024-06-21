import { useState } from "react";

export const useFirstFeatureOfFirstDomainTestButton = () => {
  const [testText, setTestText] = useState<string>("Default Button Text");

  const handleChangeTestText = () => {
    setTestText("Test Button is Clicked!!");
  };

  return {
    testText,
    handleChangeTestText,
  };
};

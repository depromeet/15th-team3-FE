import { useState } from 'react';

export const useFirstFeatureOfSecondDomainService = () => {
  const [displayText, setDisplayText] = useState<string>('');

  const handleChangeDisplayText = () => {
    setDisplayText('Test Container Button Clicked');
  };

  return {
    displayText,
    handleChangeDisplayText,
  };
};

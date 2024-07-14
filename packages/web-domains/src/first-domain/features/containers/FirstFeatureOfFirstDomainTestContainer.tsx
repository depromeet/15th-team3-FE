'use client';

import { FirstFeatureOfFirstDomainBox } from '../components/FirstFeatureOfFirstDomainTestBox';
import { FirstFeatureOfFirstDomainTestButton } from '../components/FirstFeatureOfFirstDomainTestButton';
import { useFirstFeatureOfFirstDomainService } from '../services/useFirstFeatureOfFirstDomainTestService';

export const FirstFeatureOfFirstDomainTestContainer = () => {
  const { displayText, handleChangeDisplayText, data } = useFirstFeatureOfFirstDomainService();

  return (
    <FirstFeatureOfFirstDomainBox displayText={displayText} onClick={handleChangeDisplayText}>
      <FirstFeatureOfFirstDomainTestButton
        onClick={() => {
          alert('Button is Clicked at Container');
        }}
      />
      <div css={{ width: '200px', height: '200px', backgroundColor: 'red' }}>{data}</div>
    </FirstFeatureOfFirstDomainBox>
  );
};

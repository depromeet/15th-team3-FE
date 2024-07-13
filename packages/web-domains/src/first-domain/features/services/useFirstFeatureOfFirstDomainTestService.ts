import { useEffect, useState } from 'react';

import { useHealthCheckQuery } from '../../../common/apis/queries/useHealthCheckQuery';

export const useFirstFeatureOfFirstDomainService = () => {
  const [displayText, setDisplayText] = useState<string>('');

  const { data } = useHealthCheckQuery();
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChangeDisplayText = () => {
    setDisplayText('Test Container Button Clicked');
  };

  return {
    data,
    displayText,
    handleChangeDisplayText,
  };
};

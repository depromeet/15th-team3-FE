import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { checkAPI } from '../../../common/apis/check.api';

export const useFirstFeatureOfFirstDomainService = () => {
  const [displayText, setDisplayText] = useState<string>('');

  const { data } = useQuery<any>({
    queryKey: ['health'],
    queryFn: async () => {
      return await checkAPI.Ping('');
    },

    select: (data) => {
      console.log(data);
    },
  });

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

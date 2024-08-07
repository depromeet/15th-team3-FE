import { Suspense } from 'react';

import { OwnerStartButtonContainer } from '../features/user-role-closing/containers/OwnerStartButtonContainer';
import { OwnerStartContainer } from '../features/user-role-closing/containers/OwnerStartContainer';

export const GetOwnerInfoStartScreen = () => {
  return (
    <Suspense>
      <OwnerStartContainer />
      <OwnerStartButtonContainer />
    </Suspense>
  );
};

import { AboutMeScreen } from '@/about-me';

import { MyprofileContainer } from '../features/my-profile/containers/MyprofileContainer';

export const HomeMeScreen = async () => {
  return (
    <>
      <MyprofileContainer />
      <AboutMeScreen />
    </>
  );
};

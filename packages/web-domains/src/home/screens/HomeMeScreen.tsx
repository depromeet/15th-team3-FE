import { AboutMeScreen } from '@/about-me';

import { HomeNavigationConatiner } from '../features/home-navigation/containers/HomeNavigationContainer';
import { MyprofileContainer } from '../features/my-profile/containers/MyprofileContainer';

export const HomeMeScreen = async () => {
  return (
    <>
      <MyprofileContainer />
      <AboutMeScreen />
      <HomeNavigationConatiner />
    </>
  );
};

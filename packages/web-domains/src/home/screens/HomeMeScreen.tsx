import { AboutMeScreen } from '@/about-me';

import { HomeNavigationConatiner } from '../features/home-navigation/containers/HomeNavigationContainer';

export const HomeMeScreen = async () => {
  return (
    <>
      <AboutMeScreen />
      <HomeNavigationConatiner />
    </>
  );
};

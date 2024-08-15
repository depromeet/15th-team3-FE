'use client';

import { Icon } from '@sds/components';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { HomeNavigation } from '../Navigation/HomeNavigationTab';

export const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ height: '100%', position: 'relative', paddingBottom: '78px' }}>
      {children}
      <HomeNavigation.Tab>
        <HomeNavigation.TabItem path="/home" title="홈" Icon={<Icon name="home-icon" color={isActive('/home')} />} />
        <HomeNavigation.TabItem
          path="/home/question"
          title="릴레이 질문"
          Icon={<Icon name="question-icon" color={isActive('/home/question')} />}
        />
        <HomeNavigation.TabItem
          path="/home/notification"
          title="알림"
          Icon={<Icon name="bell-icon" color={isActive('/home/notification')} />}
        />
        <HomeNavigation.TabItem
          path="/home/me"
          title="마이"
          Icon={<Icon name="user-icon" color={isActive('/home/me')} />}
        />
      </HomeNavigation.Tab>
    </div>
  );
};

const isActive = (path: string) => {
  const pathname = usePathname();

  if (pathname === path) {
    return 'black';
  }
  return 'white';
};

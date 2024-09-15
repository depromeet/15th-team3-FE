'use client';

import { Icon, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type TabItemType = { path: string; title: string; Icon: ReturnType<typeof Icon> };

interface TabProps {
  tabList?: Array<TabItemType>;
}

const Tab = ({ tabList, children }: PropsWithChildren<TabProps>) => {
  return (
    <ul
      css={{
        display: 'flex',
        zIndex: 10,
        alignItems: 'center',
        maxWidth: '600px',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '78px',
        listStyle: 'none',
        padding: '0 8px',
        backgroundColor: colors.white,
        margin: '0 auto',
        borderTop: `1px solid ${colors.grey400}`,
      }}
    >
      {tabList?.map(({ path, Icon, title }) => <TabItem key={path} path={path} Icon={Icon} title={title} />)}
      {children}
    </ul>
  );
};

interface TabItemProps extends TabItemType {}

const TabItem = ({ path, title, Icon }: TabItemProps) => {
  return (
    <li
      css={{
        flex: '0 1 100%',
        cursor: 'pointer',
      }}
    >
      <Link
        href={path}
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Icon}
        <Txt typography="title4" color={colors.black} css={{ marginTop: '8px' }}>
          {title}
        </Txt>
      </Link>
    </li>
  );
};

export const HomeNavigation = {
  Tab,
  TabItem,
};

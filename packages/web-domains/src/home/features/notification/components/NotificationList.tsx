import { colors } from '@sds/theme';
import { ReactNode } from 'react';

import { EmptyView } from '@/common/components';
import { AlarmEventType } from '@/home/common/apis/schema/Notification.schema';

interface NotificationListProps {
  notificationList?: AlarmEventType[];
  renderItem: (notification: AlarmEventType) => ReactNode;
}

export const NotificationList = ({ notificationList, renderItem }: NotificationListProps) => {
  if (notificationList?.length === 0) {
    return (
      <div
        css={{
          borderTop: `1px solid ${colors.grey400}`,
        }}
      >
        <EmptyView title="아직 알림이 없어요!" style={{ height: 'calc(100vh - 142px)' }} />;
      </div>
    );
  }

  return (
    <ul
      css={{
        listStyle: 'none',
        'li + li': {
          borderTop: `1px solid ${colors.grey400}`,
        },
        borderBottom: `1px solid ${colors.grey400}`,
      }}
    >
      {notificationList?.map((value) => <li key={value.eventId}>{renderItem(value)}</li>)}
    </ul>
  );
};

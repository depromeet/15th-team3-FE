import { colors } from '@sds/theme';
import { ReactNode } from 'react';

import { AlarmEventType } from '@/home/common/apis/schema/Notification.schema';

interface NotificationListProps {
  notificationList?: AlarmEventType[];
  renderItem: (notification: AlarmEventType) => ReactNode;
}

export const NotificationList = ({ notificationList, renderItem }: NotificationListProps) => {
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

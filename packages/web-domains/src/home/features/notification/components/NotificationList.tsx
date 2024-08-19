import { colors } from '@sds/theme';
import { ReactNode } from 'react';

import { NotificationType } from '@/home/common/apis/schema/Notification.schema';

interface NotificationListProps {
  notificationList?: NotificationType[];
  renderItem: (notification: NotificationType) => ReactNode;
}

export const NotificationList = ({ notificationList, renderItem }: NotificationListProps) => {
  return (
    <ul
      css={{
        listStyle: 'none',
        'li + li': {
          borderTop: `1px solid ${colors.grey400}`,
        },
      }}
    >
      {notificationList?.map((value) => <li key={value.eventId}>{renderItem(value)}</li>)}
    </ul>
  );
};

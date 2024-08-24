import { Button, Icon } from '@sds/components';
import { colors } from '@sds/theme';
import { ReactNode } from 'react';

import { AlarmEventType } from '@/home/common/apis/schema/Notification.schema';

import { NotificationItem } from './NotificationItem';

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
      {notificationList?.[0] && (
        <NotificationItem.AlarmItem
          alarm={notificationList?.[0]!}
          footer={
            <div css={{ display: 'flex', marginTop: '12px' }}>
              <Button
                variant="primary"
                leftDecor={
                  <Icon
                    name="hand-shaving"
                    size={15}
                    css={{
                      '& svg, & path': {
                        width: 20,
                        height: 20,
                        fill: `none`,
                      },
                    }}
                  />
                }
                css={{ marginRight: '8px' }}
              >
                나도 인사 건네기
              </Button>
              <Button variant="sub" leftDecor={<Icon name="close-icon" size={15} />}>
                다음에 인사하기
              </Button>
            </div>
          }
        />
      )}
    </ul>
  );
};

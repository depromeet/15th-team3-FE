'use client';

import { Button, Icon, Txt } from '@sds/components';
import { colors } from '@sds/theme';

import { AlarmEventType, NotificationType } from '@/home/common/apis/schema/Notification.schema';

import { NotificationItem } from '../components/NotificationItem';
import { NotificationList } from '../components/NotificationList';
import { useNotificationListService } from '../services/useNotificationListService';

export const NotificationListContainer = () => {
  const { notficationList, myMemberId } = useNotificationListService();

  return (
    <section>
      <header css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '64px' }}>
        <Txt typography="title2" color={colors.black}>
          알림
        </Txt>
      </header>
      <NotificationList
        notificationList={notficationList}
        renderItem={(notfication) => renderNotification(notfication, myMemberId)}
      />
    </section>
  );
};

const renderNotification = (notifiaciton: AlarmEventType, myMemberId?: number) => {
  switch (notifiaciton.type) {
    case 'HAND_WAVING_REQUESTED':
      return (
        <NotificationItem.AlarmItem
          alarm={notifiaciton}
          footer={
            <div>
              <Button variant="primary" leftDecor={<Icon name="close-icon" />}>
                나도 인사 건네기
              </Button>
              <Button variant="sub" leftDecor={<Icon name="close-icon" />}>
                다음에 인사하기
              </Button>
            </div>
          }
        />
      );
    case 'QUESTION_REGISTERED':
    case 'TARGET_MEMBER':
      return <NotificationItem.AlarmItem alarm={notifiaciton} />;
  }
};

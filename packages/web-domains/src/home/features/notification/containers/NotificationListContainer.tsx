'use client';

import { Txt } from '@sds/components';
import { colors } from '@sds/theme';

import { NotificationType } from '@/home/common/apis/schema/Notification.schema';

import { NotificationItem } from '../components/NotificationItem';
import { NotificationList } from '../components/NotificationList';
import { useNotificationListService } from '../services/useNotificationListService';

export const NotificationListContainer = () => {
  const { notficationList } = useNotificationListService();

  return (
    <section>
      <header css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '64px' }}>
        <Txt typography="title2" color={colors.black}>
          알림
        </Txt>
      </header>
      <NotificationList
        notificationList={notficationList}
        renderItem={(notfication) => renderNotification(notfication)}
      />
    </section>
  );
};

const renderNotification = (notifiaciton: NotificationType) => {
  switch (notifiaciton.eventType) {
    case 'GREETING':
      return <NotificationItem.Greeting from="장종오" to="이세민" />;
    case 'QUESTION_REGISTERED':
      return <NotificationItem.ArrivedNewQuestion questionCount={3} />;
    case 'TARGET_MEMBER':
      return <NotificationItem.SelectedTarget />;
  }
};

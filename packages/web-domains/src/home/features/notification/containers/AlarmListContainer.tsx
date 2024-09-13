'use client';

import { Button, Icon, Txt } from '@sds/components';
import { colors } from '@sds/theme';

import { AlarmEventType } from '@/home/common/apis/schema/Notification.schema';

import { NotificationItem } from '../components/NotificationItem';
import { NotificationList } from '../components/NotificationList';
import { useAlarmListService } from '../services/useAlarmListService';

export const AlarmListContainer = () => {
  const { notificationList, meetingId, handWavingResponse, ignoreHandWaving } = useAlarmListService();

  const renderNotification = (notification: AlarmEventType, meetingId?: number) => {
    switch (notification.type) {
      case 'HAND_WAVING_REQUESTED': {
        const handWavingId = notification.additionalData?.handWavingId;
        const isRequested = notification.additionalData?.status === 'REQUESTED';
        return (
          <NotificationItem.AlarmItem
            alarm={notification}
            {...(isRequested && {
              footer: (
                <div css={{ display: 'flex', marginTop: '12px' }}>
                  <Button
                    onClick={() => {
                      if (handWavingId && meetingId) {
                        handWavingResponse({ meetingId, handWavingId });
                      }
                    }}
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
                  <Button
                    onClick={() => {
                      if (handWavingId && meetingId) {
                        ignoreHandWaving({ meetingId, handWavingId });
                      }
                    }}
                    variant="sub"
                    leftDecor={<Icon name="close-icon" size={15} />}
                  >
                    다음에 인사하기
                  </Button>
                </div>
              ),
            })}
          />
        );
      }
      case 'HAND_WAVING_ACCEPTED':
      case 'HAND_WAVING_REJECTED':
      case 'QUESTION_REGISTERED':
      case 'TARGET_MEMBER':
        return <NotificationItem.AlarmItem alarm={notification} />;
    }
  };

  return (
    <section>
      <header css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '64px' }}>
        <Txt typography="title2" color={colors.black}>
          알림
        </Txt>
      </header>
      <NotificationList
        notificationList={notificationList}
        renderItem={(notification) => renderNotification(notification, meetingId)}
      />
    </section>
  );
};

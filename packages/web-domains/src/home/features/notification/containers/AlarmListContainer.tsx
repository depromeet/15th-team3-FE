'use client';

import { Button, Icon, Txt } from '@sds/components';
import { colors } from '@sds/theme';

import { ignoreHandwaving } from '@/home/common/apis/mutations/useHandWavingIgnoreMutation';
import { AlarmEventType } from '@/home/common/apis/schema/Notification.schema';

import { NotificationItem } from '../components/NotificationItem';
import { NotificationList } from '../components/NotificationList';
import { useAlarmListService } from '../services/useAlarmListService';

export const AlarmListContainer = () => {
  const { notficationList, meetingId, handWavingResponse } = useAlarmListService();

  const renderNotification = (notifiaciton: AlarmEventType, meetingId?: number) => {
    switch (notifiaciton.type) {
      case 'HAND_WAVING_REQUESTED': {
        const handWavingId = notifiaciton.additionalData.handWavingId;

        return (
          <NotificationItem.AlarmItem
            alarm={notifiaciton}
            footer={
              <div css={{ display: 'flex', marginTop: '12px' }}>
                <Button
                  onClick={() => handWavingResponse({ meetingId: meetingId!, handWavingId })}
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
                  onClick={() => ignoreHandwaving({ meetingId: meetingId!, handWavingId })}
                  variant="sub"
                  leftDecor={<Icon name="close-icon" size={15} />}
                >
                  다음에 인사하기
                </Button>
              </div>
            }
          />
        );
      }

      case 'QUESTION_REGISTERED':
      case 'TARGET_MEMBER':
        return <NotificationItem.AlarmItem alarm={notifiaciton} />;
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
        notificationList={notficationList}
        renderItem={(notfication) => renderNotification(notfication, meetingId)}
      />
    </section>
  );
};
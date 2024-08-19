// import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
// import { useGetNotification } from '@/home/common/apis/queries/useGetNotification';
import { NotificationType } from '@/home/common/apis/schema/Notification.schema';

export const useNotificationListService = () => {
  // const { data: meetingInfo } = useGetMeetingInfo({
  //   options: { gcTime: Infinity },
  // });

  // const meetingId = meetingInfo?.meetings[0]?.meetingId;

  // const { data: notfication } = useGetNotification({
  //   params: { meetingId: meetingId! },
  //   options: {
  //     enabled: !!meetingId,
  //     refetchInterval: 1000 * 30,
  //   },
  // });

  const notficationList: NotificationType[] = [
    {
      eventId: 0,
      eventType: 'QUESTION_REGISTERED',
    },
    {
      eventId: 1,
      eventType: 'TARGET_MEMBER',
    },
    {
      eventId: 2,
      eventType: 'GREETING',
    },
    {
      eventId: 3,
      eventType: 'QUESTION_REGISTERED',
    },
    {
      eventId: 4,
      eventType: 'QUESTION_REGISTERED',
    },
    {
      eventId: 5,
      eventType: 'TARGET_MEMBER',
    },
    {
      eventId: 6,
      eventType: 'GREETING',
    },
    {
      eventId: 7,
      eventType: 'QUESTION_REGISTERED',
    },
    {
      eventId: 8,
      eventType: 'QUESTION_REGISTERED',
    },
    {
      eventId: 9,
      eventType: 'TARGET_MEMBER',
    },
    {
      eventId: 10,
      eventType: 'GREETING',
    },
    {
      eventId: 11,
      eventType: 'QUESTION_REGISTERED',
    },
    {
      eventId: 12,
      eventType: 'QUESTION_REGISTERED',
    },
    {
      eventId: 13,
      eventType: 'TARGET_MEMBER',
    },
    {
      eventId: 14,
      eventType: 'GREETING',
    },
    {
      eventId: 15,
      eventType: 'QUESTION_REGISTERED',
    },
  ];

  return {
    notficationList,
    // notficationList: notfication?.contents,
  };
};

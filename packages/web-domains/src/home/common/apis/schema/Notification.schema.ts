export type NotificationType = {
  eventId: number;
  eventType: NotificationEventType;
};

export type NotificationEventType = 'QUESTION_REGISTERED' | 'TARGET_MEMBER' | 'GREETING';

export type NotificationResponseType =
  | {
      contents: Array<NotificationType>;
    }
  | undefined;

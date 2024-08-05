export type NotificationType = {
  eventId: number;
  eventType: 'QUESTION_REGISTERED' | 'TARGET_MEMBER';
};

export type NotificationResponseType =
  | {
      contents: Array<NotificationType>;
    }
  | undefined;

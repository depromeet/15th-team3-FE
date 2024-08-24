export type NotificationType = {
  eventId: number;
  eventType: NotificationEventType;
};

export type NotificationEventType = 'QUESTION_REGISTERED' | 'TARGET_MEMBER' | 'HAND_WAVING_REQUESTED';

export type NotificationResponseType =
  | {
      contents: Array<NotificationType>;
    }
  | undefined;

export type AlarmEventType = {
  eventId: number;
  type: NotificationEventType;
  messages: string[];
  status: 'ACTIVE' | 'INACTIVE';
  additionalData: {
    handWavingId: number;
  };
  createdAt: number;
};

export type AlarmEventListType = {
  contents: Array<AlarmEventType>;
};

export type AlarmEventListResponseType = AlarmEventListType | undefined;

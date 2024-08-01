export type MeetingType = {
  meetingTypeId: number;
  content: string;
};

export type MeetingTypeResponse =
  | {
      contents: Array<MeetingType>;
    }
  | undefined;

export type MeetingInfoType = {
  meetingName: string;
  meetingId: number;
};

export type MeetingInfoResponse = MeetingInfoType | undefined;

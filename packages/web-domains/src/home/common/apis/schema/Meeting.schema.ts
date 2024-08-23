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
  name: string;
  meetingId: number;
};

export type MeetingInfoResponse = MeetingInfoType | undefined;

export type MeetingIdListResponseType =
  | {
      meetings: Array<MeetingInfoType>;
      lastMeetingId: number;
    }
  | undefined;

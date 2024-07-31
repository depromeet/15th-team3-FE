export interface MeetingType {
  meetingTypeId: number;
  content: string;
}

export interface MeetingTypesResponse {
  contents: MeetingType[];
}

export interface MyInfoResponse {
  name: string;
  email: string;
  profileImageFileUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface MyMeetingsResponse {
  meetingIds: number[];
}

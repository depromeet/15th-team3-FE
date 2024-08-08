export interface MeetingMemberListResponse {
  contents: Array<Member>;
}

interface Member {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl: string;
  role: string;
}

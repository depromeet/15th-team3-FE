export interface SelectedAnswerResponse {
  content: Array<string>;
  count: number;
  selectedMembers: Array<Member>;
}

export interface Member {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl: string;
  role: string;
}

export interface SelectedAnswerResponse {
  content: Array<string>;
  count: number;
  selectedMembers: Array<Members>;
}

export interface Members {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl: string;
  role: string;
}

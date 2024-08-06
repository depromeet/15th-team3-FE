export interface MeetingCommentListResponse {
  content: Array<Comment>;
}

export interface Comment {
  id: number;
  content: string;
  writer: {
    meetingMemberId: number;
    name: string;
    profileImageFileUrl: string;
    role: string;
  };
}

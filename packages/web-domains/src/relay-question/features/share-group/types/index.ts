interface TargetMember {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl: string;
  role: string;
}

export interface ActiveQuestionResponse {
  meetingQuestionId: number;
  questionImageFileUrl: string;
  title: string;
  questionNumber: number;
  totalMeetingMemberCount: number;
  responseCount: number;
  engagementRate: number;
  startTime: string;
  isAnswered: boolean;
  isQuestionRegistered: boolean;
  targetMember: TargetMember;
  nextTargetMember: TargetMember;
}

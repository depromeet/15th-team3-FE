export type ProgressingQuestionType = {
  meetingQuestionId: number;
  questionImageFileUrl: string;
  title: string;
  questionNumber: number;
  startTime: Date;
  engagementRate: number;
  totalMeetingMemberCount: number;
  responseCount: number;
  isAnswered: boolean;
  isQuestionRegistered: boolean;
  targetMember: MemberType;
};

export type MemberType = {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl?: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER';
};

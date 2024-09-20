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
  nextTargetMember: MemberType | null;
};

export type MemberType = {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl?: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER';
  isMe: boolean;
  handWavingStatus: HandWavingStatusType;
};

export type HandWavingStatusType = 'NOT_REQUESTED' | 'REQUESTED' | 'ACCEPTED' | 'REJECTED';

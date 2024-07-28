export type PreviousQuestionType = {
  meetingQuestionId: number;
  questionImageFileUrl: string | null;
  title: string;
  questionNumber: number;
  totalMeetingMemberCount: number;
  responseCount: number;
  isAnswered: boolean;
  targetMember: MemberType;
  mostResponse: string;
};

export type MemberType = {
  id: number;
  name: string;
  profileImageFileUrl?: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER';
};

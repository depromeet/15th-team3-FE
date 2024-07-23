import { MemberType } from './useGetProgressingQuestionQuery.type';

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

export type PreviousQuestionListType = {
  totalMeetingMemberCount: number;
  pageable: {
    page: number;
    size: number;
    totalPages: number;
    isEnd: boolean;
  };
  content: PreviousQuestionType[];
};

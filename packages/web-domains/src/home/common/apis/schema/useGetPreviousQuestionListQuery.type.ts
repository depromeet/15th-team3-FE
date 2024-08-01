import { MemberType } from './useGetProgressingQuestionQuery.type';

export type PreviousQuestionType = {
  meetingQuestionId: number;
  questionImageFileUrl: string | null;
  title: string;
  questionNumber: number;
  responseCount: number;
  startDate: number;
  targetMember: MemberType;
};

export type PreviousQuestionListResponseType = {
  totalMeetingMemberCount: number;
  pageable: {
    page: number;
    size: number;
    totalPages: number;
    isEnd: boolean;
  };
  contents: PreviousQuestionType[];
};

export type TopPreviousQuestionType = {
  meetingQuestionId: number;
  title: string;
  content: string;
  engagementRate: number;
};

export type TopPreviousQuestionResponseType =
  | {
      contents: [TopPreviousQuestionType, TopPreviousQuestionType];
    }
  | undefined;

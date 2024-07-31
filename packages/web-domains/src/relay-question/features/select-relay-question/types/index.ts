export interface Answer {
  answerId: number;
  content: string;
}

export interface RelayQuestionContent {
  questionId: number;
  questionImageFileUrl: string;
  title: string;
  usedCount: number;
}

export interface RelayQuestionListResponse {
  content: RelayQuestionContent[];
  pageable: {
    page: number;
    size: number;
    totalPages: number;
    isEnd: boolean;
  };
}

export interface RelayQuestionResponse {
  questionId: number;
  questionImageFileUrl: string;
  title: string;
  answers: Answer[];
}

export interface NextRelayQuestionerResponse {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl: string;
  role: string;
}

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

export interface RelayQuestionResponse {
  content: RelayQuestionContent[];
  pageable: {
    page: number;
    size: number;
    totalPages: number;
    isEnd: boolean;
  };
}

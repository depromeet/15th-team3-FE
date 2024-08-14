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
  contents: RelayQuestionContent[];
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

export interface MeetingMemberResponse {
  contents: NextRelayQuestionerResponse[];
}

export interface MemberMeDto {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl: string;
  role: string;
  gender: 'MALE' | 'FEMALE';
  birth: string;
  job: string;
  location: string;
  hobbies: string[];
  mbti: string;
  introduction: string;
}

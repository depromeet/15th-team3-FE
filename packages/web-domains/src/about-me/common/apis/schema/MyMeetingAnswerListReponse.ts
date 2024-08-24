export interface MyMeetingAnswerListResponse {
  contents: Array<Content>;
}

interface Content {
  meetingQuestionId: number;
  idx: number;
  title: string;
  content: Array<string>;
  commentContent: string;
  isHidden: boolean;
}

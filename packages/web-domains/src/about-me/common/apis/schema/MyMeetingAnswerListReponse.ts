export interface MyMeetingAnswerListResponse {
  contents: Array<Content>;
}

interface Content {
  idx: number;
  title: string;
  content: Array<string>;
  commentContent: string;
  isHidden: boolean;
}

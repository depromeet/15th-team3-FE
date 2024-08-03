export interface MyMeetingAnswerListResponse {
  contents: Array<Content>;
}

interface Content {
  idx: number;
  title: string;
  content: string;
  commentContent: string;
}

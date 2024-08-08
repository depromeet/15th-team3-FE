export interface MeetingQuestionStatisticsResponse {
  contents: Array<Statistics>;
}

interface Statistics {
  rank: number;
  answerContent: string;
  count: number;
  percentage: number;
}

export interface QuestionResponse {
  questionId: number;
  questionImageFileUrl: string;
  title: string;
  answers: Array<Answer>;
}

interface Answer {
  answerId: number;
  content: string;
}

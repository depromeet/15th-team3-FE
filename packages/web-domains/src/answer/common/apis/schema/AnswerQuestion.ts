export type AnswerQuestionType = {
  meetingQuestionId: number;
  content: {
    questionId: number;
    questionImageFileUrl: string;
    title: string;
    answers: Array<AnswerQuestionOptionType>;
  };
};

export type AnswerQuestionOptionType = {
  answerId: number;
  content: string;
};

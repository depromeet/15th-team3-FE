import { AnswerQuestionOptionType } from './AnswerQuestion';

export type QuestionType = {
  meetingQuestionId: number;
  questionType: 'MULTIPLE_DESCRIPTIVE_CHOICE' | 'MULTIPLE_SHORT_CHOICE' | 'SINGLE_CHOICE';
  content: {
    subtitle?: string;
    questionId: number;
    questionImageFileUrl: string;
    title: string;
    answers: Array<AnswerQuestionOptionType>;
  };
};

export type QuestionResponseType = QuestionType | undefined;

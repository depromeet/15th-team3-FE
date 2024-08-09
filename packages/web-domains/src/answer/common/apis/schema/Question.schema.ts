import { AnswerQuestionOptionType } from './AnswerQuestion';

export type QuestionType = {
  meetingQuestionId: number;
  questionType: 'MULTIPLE_DESCRIPTIVE_CHOICE' | 'MULTIPLE_SHORT_CHOICE' | 'SINGLE_CHOICE';
  content: {
    questionId: number;
    questionImageFileUrl: string;
    title: string;
    answers: Array<AnswerQuestionOptionType>;
  };
};

export type QuestionResponseType = QuestionType | undefined;

// {
//   "meetingQuestionId": 0,
//   "questionType": "SINGLE_CHOICE",
//   "content": {
//     "questionId": 1,
//     "questionImageFileUrl": "https://example.com",
//     "title": "갖고 싶은 초능력은?",
//     "answers": [
//       {
//         "answerId": 1,
//         "content": "분신술"
//       }
//     ]
//   }
// }

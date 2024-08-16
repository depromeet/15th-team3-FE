export const STEPS = {
  QUESTION: 'question',
  RESULT: 'result',
  FRIENDSHIP: 'friendship',
  ABOUT_ME: 'about-me',
} as const;

export type StepType = (typeof STEPS)[keyof typeof STEPS];

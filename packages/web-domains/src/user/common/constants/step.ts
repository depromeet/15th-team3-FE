export const STEPS = {
  BASIC_INFO: 'basic-info',
  EXTRA_INFO: 'extra-info',
  HOBBIES_INFO: 'hobby-info',
  MBTI_IFNO: 'mbti-info',
  INTRO_INFO: 'intro-info',
} as const;

export type StepType = (typeof STEPS)[keyof typeof STEPS];

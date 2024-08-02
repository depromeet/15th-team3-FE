export const MBTI_TYPE = [
  { label: '😎 ISTJ', value: 'ISTJ' },
  { label: '😎 ISFJ', value: 'ISFJ' },
  { label: '😎 INFJ', value: 'INFJ' },
  { label: '🤓 INTJ', value: 'INTJ' },
  { label: '😎 ISTP', value: 'ISTP' },
  { label: '🙂 ISFP', value: 'ISFP' },
  { label: '🥹 INFP', value: 'INFP' },
  { label: '🧐 INTP', value: 'INTP' },
  { label: '😎 ESTP', value: 'ESTP' },
  { label: '😎 ESFP', value: 'ESFP' },
  { label: '😎 ENFP', value: 'ENFP' },
  { label: '😎 ENTP', value: 'ENTP' },
  { label: '😎 ESTJ', value: 'ESTJ' },
  { label: '😎 ESFJ', value: 'ESFJ' },
  { label: '😎 ENFJ', value: 'ENFJ' },
  { label: '😎 ENTJ', value: 'ENTJ' },
] as const;

export type MbtiType = (typeof MBTI_TYPE)[number]['value'];

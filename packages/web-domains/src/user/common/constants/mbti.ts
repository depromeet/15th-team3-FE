export const MBTI_TYPE = [
  { label: '🥹 INFP', value: 'INFP' },
  { label: '🧐 INTP', value: 'INTP' },
  { label: '🤓 INTJ', value: 'INTJ' },
  { label: '🙂 ISFP', value: 'ISFP' },
  { label: '🤨 ISTP', value: 'ISTP' },
  { label: '🥸️ ISTJ', value: 'ISTJ' },
  { label: '🥰️ ENFP', value: 'ENFP' },
  { label: '😎 ENTP', value: 'ENTP' },
  { label: '😀 ENTJ', value: 'ENTJ' },
  { label: '🥳 ESFP', value: 'ESFP' },
  { label: '😋 ESTP', value: 'ESTP' },
  { label: '😳 ESTJ', value: 'ESTJ' },
  { label: '😆 INFJ', value: 'INFJ' },
  { label: '😘 ENFJ', value: 'ENFJ' },
  { label: '😉 ISFJ', value: 'ISFJ' },
  { label: '😚 ESFJ', value: 'ESFJ' },
] as const;

export type MbtiType = (typeof MBTI_TYPE)[number]['value'];

export const generateGender = (gender?: 'FEMALE' | 'MALE') => {
  if (gender === 'FEMALE') {
    return '여자';
  }

  if (gender === 'MALE') {
    return '남자';
  }

  return undefined;
};

export const generateAge = (age: string) => {
  // NOTE 예외처리
  if (!age.includes('-')) return '';

  const year = age.split('-')[0] || '';
  const displayYear = [...year].slice(-2).join('');

  return `${displayYear}년생`;
};

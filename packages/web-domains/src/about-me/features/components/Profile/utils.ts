export const generateGender = (gender?: 'FEMALE' | 'MALE') => {
  if (gender === 'FEMALE') {
    return '여자';
  }

  if (gender === 'MALE') {
    return '남자';
  }

  return undefined;
};

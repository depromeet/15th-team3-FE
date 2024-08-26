export const generateDate = (date: `${string}-${string}-${string}`) => {
  const [YYYY, MM, DD] = date.split('-');
  return `${YYYY}년 ${MM}월 ${DD}일`;
};

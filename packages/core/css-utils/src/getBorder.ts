export const getBorder = (borderColor: string, borderWidth = '1px', borderStyle = 'solid') => {
  return `${borderWidth} ${borderStyle} ${borderColor}`;
};

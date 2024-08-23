export const getCssVar = (cssVariable: string, initial?: unknown) => {
  return initial == null ? `var(${cssVariable})` : `var(${cssVariable}, ${initial})`;
};

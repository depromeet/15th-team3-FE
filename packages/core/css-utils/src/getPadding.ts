export const getPadding = (
  top: string | number,
  right?: string | number,
  bottom?: string | number,
  left?: string | number,
): string => {
  // 인자가 하나일 때: 네 방향 모두 같은 값
  if (right === undefined && bottom === undefined && left === undefined) {
    return `${top}`;
  }

  // 인자가 두 개일 때: 상하(top/bottom)는 첫 번째 값, 좌우(left/right)는 두 번째 값
  if (bottom === undefined && left === undefined) {
    return `${top} ${right}`;
  }

  // 인자가 세 개일 때: 상(top)은 첫 번째 값, 좌우(left/right)는 두 번째 값, 하(bottom)는 세 번째 값
  if (left === undefined) {
    return `${top} ${right} ${bottom}`;
  }

  // 인자가 네 개일 때: 상(top), 우(right), 하(bottom), 좌(left)를 각각 적용
  return `${top} ${right} ${bottom} ${left}`;
};

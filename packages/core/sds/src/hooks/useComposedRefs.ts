/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/composeRefs.tsx#L29
 */
import { useCallback } from 'react';

type PossibleRef<T> = React.Ref<T> | undefined;

const setRef = <T>(ref: PossibleRef<T>, value: T) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.MutableRefObject<T>).current = value;
  }
};

const composeRefs = <T>(...refs: PossibleRef<T>[]) => {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
};

export const useComposedRefs = <T>(...refs: PossibleRef<T>[]) => {
  return useCallback(composeRefs(...refs), refs);
};

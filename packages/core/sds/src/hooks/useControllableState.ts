import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { useCallbackRef } from './useCallbackRef';

interface UseControllableStateParams<T> {
  prop?: T | undefined;
  defaultProp?: T | undefined;
  onChange?: (state: T) => void;
}

export const useControllableState = <T>(params: UseControllableStateParams<T>) => {
  const { prop, defaultProp, onChange } = params;

  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);

  const setValue: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue as (prevState?: T) => T;
        const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
        if (value !== prop) handleChange(value as T);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange],
  );

  return [value, setValue] as const;
};

const useUncontrolledState = <T>(params: Omit<UseControllableStateParams<T>, 'prop'>) => {
  const { defaultProp, onChange } = params;

  const uncontrolledState = useState<T | undefined>(defaultProp);
  const [value] = uncontrolledState;

  const prevValueRef = useRef(value);
  const handleChange = useCallbackRef(onChange);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value as T);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);

  return uncontrolledState;
};

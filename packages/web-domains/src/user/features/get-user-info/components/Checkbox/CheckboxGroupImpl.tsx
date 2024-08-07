'use client';

import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

export type CheckboxContextValue = {
  value?: (string | number)[];
  handleItemCheck: (value: string | number) => void;
  handleItemUncheck: (value: string | number) => void;
};

export const CheckboxContext = createContext<CheckboxContextValue | undefined>(undefined);

export interface CheckboxGroupImplProps {
  value?: (string | number)[];
  onValueChange?: (value: (string | number)[]) => void;
}

export const CheckboxGroupImpl = (props: PropsWithChildren<CheckboxGroupImplProps>) => {
  const { children, value: valueProp, onValueChange: onChangeProp } = props;

  const [uncontrolledvalue, setUncontrolledvalueValue] = useState(() => valueProp);

  const isControlled = valueProp !== undefined;

  const value = isControlled ? valueProp : uncontrolledvalue;

  const handleChangeValue: React.Dispatch<React.SetStateAction<(string | number)[] | undefined>> = useCallback(
    (nextValue) => {
      const value = typeof nextValue === 'function' ? nextValue(valueProp) : nextValue;
      if (isControlled) {
        if (value !== valueProp) {
          onChangeProp?.(value as (string | number)[]);
        }
      } else {
        setUncontrolledvalueValue(nextValue);
      }
    },
    [isControlled, valueProp, onChangeProp],
  );

  const actions = useMemo(
    () => ({
      handleItemCheck: (itemValue: string | number) => handleChangeValue((prevValue = []) => [...prevValue, itemValue]),
      handleItemUncheck: (itemValue: string | number) =>
        handleChangeValue((prevValue = []) => prevValue.filter((value) => value !== itemValue)),
    }),
    [handleChangeValue],
  );

  return <CheckboxContext.Provider value={{ value, ...actions }}>{children}</CheckboxContext.Provider>;
};

export const useCheckboxContext = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('useCheckboxContext는 CheckboxGroup 내부에서만 사용 가능합니다.');
  }
  return context;
};

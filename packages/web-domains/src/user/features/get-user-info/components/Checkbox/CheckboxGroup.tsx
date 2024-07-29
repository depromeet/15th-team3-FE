'use client';

import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

export type CheckboxStateContextType = {
  value?: (string | number)[];
};

export interface CheckboxActionContextType {
  handleItemCheck: (value: string | number) => void;
  handleItemUncheck: (value: string | number) => void;
}

export const CheckboxStateContext = createContext<CheckboxStateContextType | undefined>(undefined);

export const CheckboxActionContext = createContext<CheckboxActionContextType | undefined>(undefined);

interface CheckBoxProps {
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
}

export const CheckboxGroup = (props: PropsWithChildren<CheckBoxProps>) => {
  const { children, value: valueProp, onChange: onChangeProp } = props;

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

  return (
    <CheckboxActionContext.Provider value={actions}>
      <CheckboxStateContext.Provider value={{ value }}>{children}</CheckboxStateContext.Provider>
    </CheckboxActionContext.Provider>
  );
};

export const useCheckboxState = () => {
  const context = useContext(CheckboxStateContext);
  if (!context) {
    throw new Error('CheckboxStateContext.Provider의 Context가 없습니다.');
  }
  return context;
};

export const useCheckboxActions = () => {
  const context = useContext(CheckboxActionContext);
  if (!context) {
    throw new Error('CheckboxActionContext.Provider의 Context가 없습니다.');
  }
  return context;
};

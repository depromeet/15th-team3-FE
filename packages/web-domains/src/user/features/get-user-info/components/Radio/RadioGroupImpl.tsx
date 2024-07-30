import { createContext, PropsWithChildren, useContext } from 'react';

interface RadioContextValue {
  onChange: (value: string) => void;
  value: string | number;
}

export interface RadioGroupImplProps {
  onChange: (value: string) => void;
  value: string | number;
}

export const RadioContext = createContext<RadioContextValue | null>(null);

export const RadioGroupImpl = (props: PropsWithChildren<RadioGroupImplProps>) => {
  const { children, ...restProps } = props;

  return <RadioContext.Provider value={restProps}>{children}</RadioContext.Provider>;
};

export const useRadioContext = () => {
  const context = useContext(RadioContext);

  if (!context) {
    throw new Error('useRadioContext는 RadioGroup 내부에서만 사용 가능합니다.');
  }
  return context;
};

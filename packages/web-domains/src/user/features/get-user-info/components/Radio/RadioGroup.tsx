import { createContext, PropsWithChildren, useContext } from 'react';

interface RadioContextType {
  onChange: (value: string) => void;
  value: string | number;
}

interface RadioGroupProps {
  onChange: (value: string) => void;
  value: string | number;
}

export const RadioContext = createContext<RadioContextType | null>(null);

export const RadioGroup = (props: PropsWithChildren<RadioGroupProps>) => {
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

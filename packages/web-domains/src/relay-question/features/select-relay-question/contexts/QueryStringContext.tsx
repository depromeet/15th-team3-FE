'use client';

import { useSearchParams } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface QueryStringProviderProps {
  children: ReactNode;
}

interface QueryStringContextProps {
  currentStep: number;
}

export const QueryStringContext = createContext<QueryStringContextProps>({
  currentStep: 1,
});

export const QueryStringProvider = ({ children }: QueryStringProviderProps) => {
  const searchParams = useSearchParams();
  const urlStep = searchParams.get('current-step');

  const [currentStep, setCurrentStep] = useState<number>(Number(urlStep) || 1);

  useEffect(() => {
    setCurrentStep(Number(urlStep));
  }, [urlStep]);

  return <QueryStringContext.Provider value={{ currentStep }}>{children}</QueryStringContext.Provider>;
};

export const useQueryStringContext = () => {
  const context = useContext(QueryStringContext);
  if (context === null) {
    throw new Error('useQueryStringContext 은 QueryStringProvider 내부에서 호출해주세요.');
  }
  return context;
};

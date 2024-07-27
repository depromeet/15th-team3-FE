'use client';

import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface DialogContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const DialogContext = createContext<DialogContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw Error('상위에 프로바이더가 감싸져 있지않음');
  }

  return context;
};

export const DialogContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return <DialogContext.Provider value={{ isOpen, open, close }}>{children}</DialogContext.Provider>;
};

'use client';

import React, { createContext, useState, useCallback, useContext, PropsWithChildren, ComponentType } from 'react';

import { ToastContainer } from './ToastContainer';
import { ToastType, Toast } from './types';

interface ToastContextType {
  addToast: (content: ComponentType | string, type?: ToastType) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((content: ComponentType | string, type: ToastType = 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, content, type }]);
    const timer = setTimeout(() => removeToast(id), 1500);
    return () => clearTimeout(timer);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast는 ToastProvider 내부에서만 사용 가능합니다.');
  }
  return context;
};

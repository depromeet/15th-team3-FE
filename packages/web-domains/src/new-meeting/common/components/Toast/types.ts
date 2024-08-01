import { ComponentType } from 'react';

export type ToastType = 'info';

export interface Toast {
  id: string;
  content: ComponentType | string;
  type: ToastType;
}

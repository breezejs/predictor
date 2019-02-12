import {ReactNode} from 'react';

export interface IDrawerElementProps {
  visible: boolean;
}

export interface IDrawerProps {
  children: ReactNode;
  onClose: (() => void);
  visible: boolean;
}

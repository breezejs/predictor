import {ReactNode} from 'react';

export interface IDrawerElementProps {
  visible: boolean;
}

export default interface IDrawerProps {
  children: ReactNode;
  onClose: (() => void);
  visible: boolean;
}

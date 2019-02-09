export type ToolbarTheme = 'primary' | 'secondary';

export interface IToolbarElementProps {
  styling: ToolbarTheme;
}

export default interface IToolbarProps {
  onClick?: (() => void);
  theme: ToolbarTheme;
  title: string;
}

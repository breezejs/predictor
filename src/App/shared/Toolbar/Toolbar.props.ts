export type ToolbarTheme = 'primary' | 'secondary';

export interface IToolbarElementProps {
  styling: ToolbarTheme;
}

export interface IToolbarProps {
  onClick?: (() => void);
  theme: ToolbarTheme;
  title: string;
}

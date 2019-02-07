export type ToolbarTheme = 'primary' | 'secondary';

export default interface IToolbarProps {
  theme: ToolbarTheme;
  title: string;
  onClick? (): void;
}

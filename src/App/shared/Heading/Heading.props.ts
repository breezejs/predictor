export type HeadingTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export default interface IHeadingProps {
  className?: string;
  level: HeadingTypes;
  text: string;
}

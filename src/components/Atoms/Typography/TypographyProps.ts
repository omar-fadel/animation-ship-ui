export interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'black' | 'white';
  align?: 'left' | 'center' | 'right';
  bold?: 'true' | 'false';
  className?: string;
}

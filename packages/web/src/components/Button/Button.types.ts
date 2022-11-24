export type Font = {
  width?: string;
  height?: string;
  icon: string;
};

export type ButtonProps = {
  children: React.ReactNode;
  hasBackgroundShadow?: boolean;
  hasBounceAnimation?: boolean;
  backgroundColor: string;
  textColor?: string;
  backgroundColorHover?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

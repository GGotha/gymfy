type Size = {
  width?: string;
  height?: string;
};

export type CardComponentProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  size?: Size;
  hasBounceAnimation?: boolean;
};

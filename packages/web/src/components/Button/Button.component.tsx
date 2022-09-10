type ButtonProps = {
  children: any;
  hasBackgroundShadow?: boolean;
  hasBounceAnimation?: boolean;
  backgroundColor: string;
  textColor?: string;
  backgroundColorHover?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  hasBackgroundShadow = true,
  hasBounceAnimation = false,
  backgroundColor,
  textColor = "text-white",
  backgroundColorHover = "none",
  width = "w-32",
  height = "h-10",
  borderRadius = "rounded-lg",
  onClick,
}) => {
  const defaultStyles = "rounded-lg shadow-xl text-base duration-300 ";

  const styleHasBackgroundShadow = hasBackgroundShadow ? "shadow-zinc-900" : "";
  const styleHasBounceAnimation = hasBounceAnimation ? "animate-bounce" : "";
  const styleBackgroundColorHover = backgroundColorHover !== "none" ? "hover:bg-black" : "";

  const style = `
    ${defaultStyles}
    ${styleHasBounceAnimation}
    ${textColor}
    ${backgroundColor}
    ${styleBackgroundColorHover}
    ${styleHasBackgroundShadow}
    ${width}
    ${height}
    ${borderRadius}
  `;

  return (
    <>
      <button className={style} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default ButtonComponent;

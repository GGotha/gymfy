import { ButtonProps } from "./Button.types";

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
  const defaultStyles = "rounded-lg shadow-xl text-base duration-300 min-h-[40px]";

  const styleHasBackgroundShadow = hasBackgroundShadow ? "shadow-zinc-900" : "";
  const styleHasBounceAnimation = hasBounceAnimation ? "animate-bounce" : "";
  const styleBackgroundColorHover = backgroundColorHover !== "none" ? backgroundColorHover : "";

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
      <button className={style} onClick={onClick} type="submit">
        {children}
      </button>
    </>
  );
};

export default ButtonComponent;

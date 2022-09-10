type ButtonProps = {
  children: string;
  hasBackgroundShadow?: boolean;
  hasBounceAnimation?: boolean;
  backgroundColor: string;
  textColor?: string;
  backgroundColorHover?: string;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  hasBackgroundShadow = true,
  hasBounceAnimation = false,
  backgroundColor,
  textColor = "text-white",
  backgroundColorHover = "none",
}) => {
  const buttonDefaultStyles = "w-32 h-10 rounded-lg shadow-xl text-base duration-300 rounded-lg";

  const styleHasBackgroundShadow = hasBackgroundShadow ? "shadow-zinc-900" : "";
  const styleHasBounceAnimation = hasBounceAnimation ? "animate-bounce" : "";
  const styleBackgroundColorHover = backgroundColorHover !== "none" ? "hover:bg-black" : "";

  const style = `
    ${buttonDefaultStyles}
    ${styleHasBounceAnimation} 
    ${textColor}
    ${backgroundColor}
    ${styleBackgroundColorHover}
    ${styleHasBackgroundShadow}
    bg-black
  `;

  return (
    <>
      <button className={style}>{children}</button>
    </>
  );
};

export default ButtonComponent;

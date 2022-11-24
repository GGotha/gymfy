import { CardComponentProps } from "./Card.types";

const CardComponent: React.FC<CardComponentProps> = ({ children, size, hasBounceAnimation }) => {
  const styleHasBounceAnimation = hasBounceAnimation ? "animate-bounce" : "";

  const cardStyles = `
    ${styleHasBounceAnimation} 
    ${size!.width} 
    ${size!.height}
    rounded-lg bg-gradient-to-r p-[2px] from-[#822946] to-[#292AB8]
  `;

  return (
    <>
      <div className={cardStyles}>
        <div className="bg-black rounded-lg p-4 h-full">{children}</div>
      </div>
    </>
  );
};

export default CardComponent;

type CardComponentProps = {
  children: any;
  width?: string;
  height?: string;
};

const CardComponent: React.FC<CardComponentProps> = ({
  children,
  width = "w-[402px]",
  height = "h-[395px]",
}) => {
  const cardStyles = `${width} ${height} rounded-lg bg-gradient-to-r p-[2px] from-[#822946] to-[#292AB8]`;

  return (
    <>
      <div className={cardStyles}>
        <div className="bg-black rounded-lg p-4 h-full">{children}</div>
      </div>
    </>
  );
};

export default CardComponent;

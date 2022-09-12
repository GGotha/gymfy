type CardComponentProps = {
  children: any;
};

const CardComponent: React.FC<CardComponentProps> = ({ children }: any) => {
  return (
    <>
      <div className="w-[402px] h-[395px] rounded-lg bg-gradient-to-r p-[2px] from-[#822946] to-[#292AB8]">
        <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default CardComponent;

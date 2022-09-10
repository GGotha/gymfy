type OptionSidebarProps = {
  name: string;
  icon: string;
  iconWidth?: string;
  iconHeight?: string;
  isDashboard?: boolean;
  hasNotifications?: boolean;
};

const OptionSidebarComponent: React.FC<OptionSidebarProps> = ({
  name,
  icon,
  iconWidth = "w-[25px]",
  iconHeight = "h-[25px]",
  isDashboard = false,
  hasNotifications = false,
}) => {
  const imageDefaultStyles = "ml-6 mr-4";
  const imageStyle = `${iconWidth} ${iconHeight} ${imageDefaultStyles}`;

  const textStyle = `
  ${
    isDashboard ? "font-semibold text-white" : "font-regular text-sidebarText"
  } font-quicksand text-base`;

  const imageAlt = icon.split("/")[4].split(".")[0];

  return (
    <>
      <div className="flex w-full items-center cursor-pointer">
        <div className="w-16">
          <img src={icon} alt={imageAlt ?? ""} className={imageStyle} />
        </div>
        <h1 className={textStyle}>{name}</h1>
      </div>
      {hasNotifications ? (
        <div className="relative">
          <span className="animate-ping right-14 bottom-5 absolute rounded-full h-3 w-3 bg-[#F8961C]"></span>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default OptionSidebarComponent;

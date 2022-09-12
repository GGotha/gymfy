type OptionSidebarProps = {
  name: string;
  icon: string;
  iconWidth?: string;
  iconHeight?: string;
  isDashboard?: boolean;
  hasNotifications?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const OptionSidebarComponent: React.FC<OptionSidebarProps> = ({
  name,
  icon,
  iconWidth = "w-[25px]",
  iconHeight = "h-[25px]",
  isDashboard = false,
  hasNotifications = false,
  onClick,
}) => {
  const imageDefaultStyles = "ml-6 mr-4";
  const imageStyle = `${iconWidth} ${iconHeight} ${imageDefaultStyles}`;

  const backgroundStyle = `flex w-full items-center cursor-pointer ${
    isDashboard ? "bg-gradient-to-bl from-[#EB001B] to-[#0042FF] rounded-lg h-14" : ""
  }`;

  const textStyle = `
  ${
    isDashboard ? "font-semibold text-white" : "font-regular text-sidebarText"
  } font-quicksand text-base`;

  const imageAlt = icon.split("/")[4].split(".")[0];

  return (
    <>
      <div className={backgroundStyle} onClick={onClick}>
        <div className="w-16">
          <img src={icon} alt={imageAlt ?? ""} className={imageStyle} />
        </div>
        <h1 className={textStyle}>{name}</h1>
      </div>
      {hasNotifications ? (
        <div className="relative">
          <span className="animate-ping right-14 bottom-5 absolute rounded-full h-3 w-3 bg-[#F8961C]" />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default OptionSidebarComponent;

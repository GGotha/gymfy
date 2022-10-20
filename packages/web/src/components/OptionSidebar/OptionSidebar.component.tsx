type OptionSidebarProps = {
  name: string;
  icon: string;
  path: string;
  iconWidth?: string;
  iconHeight?: string;
  isDashboard?: boolean;
  hasNotifications?: boolean;
  // onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onClick: any;
};

const OptionSidebarComponent: React.FC<OptionSidebarProps> = ({
  name,
  icon,
  iconWidth = "w-[25px]",
  iconHeight = "h-[25px]",
  isDashboard = false,
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
          <img src={icon} alt={imageAlt ?? ""} className={imageStyle} color="white" />
        </div>
        <h1 className={textStyle}>{name}</h1>
      </div>
    </>
  );
};

export default OptionSidebarComponent;

import { NavbarComponent } from "~/components/Navbar";
import { SidebarComponent } from "~/components/Sidebar";

type MainScreenProps = {
  children: any;
};

const MainScreen: React.FC<MainScreenProps> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-[256px,auto] grid-rows-[95px,auto] h-screen min-h-[750px]">
        <div className="h-screen border-r-2 border-[#2C2D33] min-h-[750px]">
          <SidebarComponent />
        </div>
        <div className="bg-darkGrey border-b-2 border-[#2C2D33]">
          <NavbarComponent />
        </div>
        <div className="invisible"></div>
        <div className="bg-[url('./assets/images/wallpaper-dashboard.jpg')] bg-no-repeat bg-cover h-full 2xl:h-full w-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainScreen;

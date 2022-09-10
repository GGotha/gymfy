import { SidebarComponent } from "~/components/Sidebar";

const DashboardScreen: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-[256px,auto] grid-rows-[95px,auto] h-screen">
        <div className="h-screen border-r-2 border-[#2C2D33]">
          <SidebarComponent />
        </div>
        <div className="bg-darkGrey border-b-2 border-[#2C2D33]"></div>
        <div></div>
        <div className="bg-black"></div>
      </div>
    </>
  );
};

export default DashboardScreen;

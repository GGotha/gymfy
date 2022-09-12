import { NavbarComponent } from "~/components/Navbar";
import { SidebarComponent } from "~/components/Sidebar";
import CardComponent from "~/components/Card/Card.component";
import { CardWalletComponent } from "~/components/CardWallet";

const DashboardScreen: React.FC = () => {
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
        <div className="bg-black bg-[url('./assets/images/background.png')] bg-no-repeat bg-cover h-screen 2xl:h-full w-full p-8">
          <h1 className="text-white text-2xl font-saira font-semibold mb-5">Minha carteira</h1>
          <CardComponent>
            <CardWalletComponent />
          </CardComponent>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;

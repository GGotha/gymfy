import { searchIcon, chatIcon, bellIcon, profile } from "~/assets/images";
import { InputComponent } from "~/components/Input";

const NavbarComponent: React.FC = () => {
  return (
    <>
      <div className="h-full flex items-center justify-between mx-10">
        <div className="relative">
          <img src={searchIcon} alt="" className="absolute right-5 bottom-0 top-3" />
          <InputComponent placeholder="Procurar" />
        </div>
        <div className="flex items-center">
          <img src={chatIcon} alt="" className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <img src={bellIcon} alt="" className="ml-14" />
            <span className="animate-ping right-0 bottom-4 absolute rounded-full h-3 w-3 bg-[#F8961C]"></span>
          </div>
          <div className="rounded-lg w-11 h-11 bg-white ml-14 cursor-pointer">
            <img src={profile} alt="" className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;

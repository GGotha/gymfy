import { HomePageFooterComponent } from "~/components/HomePageFooter";
import { LikeAndFollowTextComponent } from "~/components/LikeAndFollowText";
import { ButtonComponent } from "~/components/Button";

import logo from "~/assets/logo.svg";

const HomeScreen: React.FC = () => {
  return (
    <>
      <div className="bg-[url('./assets/background.png')] bg-no-repeat bg-cover h-screen 2xl:h-full w-full min-h-[900px]">
        <div className="bg-black bg-opacity-80 h-screen w-full min-h-[900px]">
          <div className="xxs:ml-20 mx-32 py-14">
            <div className="flex justify-between">
              <div className="hover:animate-pulse cursor-pointer">
                <img src={logo} alt="" width={50} />
              </div>

              <ButtonComponent
                backgroundColor="bg-zinc-900"
                backgroundColorHover="hover:bg-black"
                hasBounceAnimation
              >
                Entrar
              </ButtonComponent>
            </div>
            <div className="w-1/2 mt-14">
              <LikeAndFollowTextComponent />
            </div>
            <div className="mt-24">
              <HomePageFooterComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

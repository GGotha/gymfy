import { useNavigate } from "react-router-dom";

import { logoIcon } from "~/assets/images";
import { ButtonComponent } from "~/components/Button";
import { HomePageFooterComponent } from "~/components/HomePageFooter";
import { LikeAndFollowTextComponent } from "~/components/LikeAndFollowText";

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const styles = `bg-[url('./assets/images/wallpaper.jpg')] bg-no-repeat bg-cover h-screen 2xl:h-full w-full min-h-[900px]`;

  return (
    <>
      <div className={styles}>
        <div className="bg-black bg-opacity-90 h-screen w-full min-h-[900px]">
          <div className="xxs:ml-20 mx-32 py-14">
            <div className="flex justify-between">
              <div className="hover:animate-pulse cursor-pointer">
                <img src={logoIcon} alt="logo" width={50} />
              </div>

              <ButtonComponent
                backgroundColor="bg-black"
                backgroundColorHover="hover:bg-zinc-900"
                hasBounceAnimation
                onClick={() => {
                  navigate("/login");
                }}
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

import { useNavigate } from "react-router-dom";

import { gymfyWithoutTextIcon } from "~/assets/images";
import { ButtonComponent } from "~/components/Button";
import { LikeAndFollowTextComponent } from "~/components/LikeAndFollowText";
import FadeIn from "react-fade-in";

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const styles = `bg-[url('./assets/images/wallpaper.jpg')] bg-no-repeat bg-cover h-screen md:h-full w-full min-h-[900px]`;

  return (
    <>
      <div className={styles}>
        <div className="bg-black bg-opacity-90 h-screen w-full min-h-[900px]">
          <div className="md:mx-32 md:block md:py-0 md:px-0 py-14 mx-0 px-20 h-full flex flex-col items-center justify-center">
            <div className="md:flex md:justify-between md:flex-row md:pt-20 flex-col items-center">
              <FadeIn
                transitionDuration={1000}
                className="md:hover:animate-pulse md:cursor-pointer md:mb-0 mb-20 flex justify-center"
              >
                <img src={gymfyWithoutTextIcon} alt="logo" width={85} />
              </FadeIn>

              <FadeIn transitionDuration={1000}>
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
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 mt-40">
              <LikeAndFollowTextComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

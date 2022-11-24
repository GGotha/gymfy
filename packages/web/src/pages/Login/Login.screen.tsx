import FadeIn from "react-fade-in";
import { coinbaseIcon, metamaskIcon, trustwalletIcon } from "~/assets/images";
import { CardComponent } from "~/components/Card";

const LoginScreen: React.FC = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/wallpaper.jpg')] bg-no-repeat bg-cover h-screen 2xl:h-full w-full">
        <FadeIn className="bg-black bg-opacity-90 h-screen w-full min-h-[900px] flex justify-center items-center">
          <CardComponent size={{ height: "h-[520px]", width: "w-[800px]" }}>
            <div className="my-5 mx-5">
              <h1 className="text-4xl text-white font-saira">Conectar carteira</h1>
            </div>
            <div className="mt-10 h-full">
              <div className="flex justify-evenly items-center h-2/3">
                <CardComponent size={{ height: "auto", width: "w-[180px]" }} hasBounceAnimation>
                  <div className="flex flex-col items-center">
                    <img src={metamaskIcon} alt="metamask" width={90} />
                    <h3 className="text-white font-saira">Metamask</h3>
                  </div>
                </CardComponent>
                <CardComponent size={{ height: "auto", width: "w-[180px]" }}>
                  <div className="flex flex-col items-center opacity-30">
                    <img src={coinbaseIcon} alt="coinbase" width={80} className="mb-2" />
                    <h3 className="text-white font-saira">Coinbase Wallet</h3>
                  </div>
                </CardComponent>
                <CardComponent size={{ height: "auto", width: "w-[180px]" }}>
                  <div className="flex flex-col items-center opacity-30">
                    <img src={trustwalletIcon} alt="trustwallet" width={80} className="mb-2" />
                    <h3 className="text-white font-saira">Trust Wallet</h3>
                  </div>
                </CardComponent>
              </div>
            </div>
          </CardComponent>
        </FadeIn>
      </div>
    </>
  );
};

export default LoginScreen;

import facebook from "~/assets/facebook.svg";
import instagram from "~/assets/instagram.svg";
import linkedin from "~/assets/linkedin.svg";
import twitter from "~/assets/twitter.svg";

const HomePageFooterComponent: React.FC = () => (
  <div>
    <div className="flex">
      <div className="border-[3px] mr-4"></div>
      <div className="flex flex-col">
        <h1 className="text-white uppercase font-bold text-sm">Any Queries? Visit us on</h1>
        <h1 className="text-white font-bold mt-3 text-lg">www.nickelfox.com</h1>
      </div>
    </div>
    <div className="flex gap-6 mt-8 ml-5">
      <img src={instagram} width={20.48} height={20.48} alt="instagram" />
      <img src={twitter} width={22.55} height={18.33} alt="twitter" />
      <img src={linkedin} width={20.9} height={19.97} alt="linkedin" />
      <img src={facebook} width={9.46} height={19.71} alt="facebook" />
    </div>
  </div>
);

export default HomePageFooterComponent;

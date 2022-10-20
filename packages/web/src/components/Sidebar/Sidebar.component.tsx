import {
  bitcoinIcon,
  ethereumIcon,
  gymfyIcon,
  hammerIcon,
  heartIcon,
  helpIcon,
  houseIcon,
  marketplaceIcon,
  plusIcon,
  settingsIcon,
  usdcoinIcon,
} from "~/assets/images";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OptionSidebarComponent } from "~/components/OptionSidebar";

type SidebarListProps = {
  name: string;
  icon: string;
  path: string;
};

enum SidebarEnum {
  dashboard = "Início",
  plan = "Planos",
  marketplace = "Mercado",
  favorites = "Favoritos",
  wallets = "Carteiras",
  bitcoin = "Bitcoin",
  ethereum = "Ethereum",
  usdCoin = "USD Coin",
  settings = "Configurações",
  helpFaq = "Ajuda",
}

const SIDEBAR_LIST: Array<SidebarListProps> = [
  { name: SidebarEnum.dashboard, icon: houseIcon, path: "/dashboard" },
  { name: SidebarEnum.plan, icon: hammerIcon, path: "/plan" },
  { name: SidebarEnum.marketplace, icon: marketplaceIcon, path: "/dashboard" },
  { name: SidebarEnum.favorites, icon: heartIcon, path: "/dashboard" },
  { name: SidebarEnum.wallets, icon: plusIcon, path: "/dashboard" },
  { name: SidebarEnum.bitcoin, icon: bitcoinIcon, path: "/dashboard" },
  { name: SidebarEnum.ethereum, icon: ethereumIcon, path: "/dashboard" },
  { name: SidebarEnum.usdCoin, icon: usdcoinIcon, path: "/dashboard" },
  { name: SidebarEnum.settings, icon: settingsIcon, path: "/dashboard" },
  { name: SidebarEnum.helpFaq, icon: helpIcon, path: "/dashboard" },
];

const SidebarComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full px-5 bg-darkGrey flex flex-col items-center">
        <div className="mt-6 mb-12 w-full">
          <img src={gymfyIcon} alt="" />
        </div>
        {SIDEBAR_LIST.map((option, index: number) => (
          <>
            <OptionSidebarComponent
              key={index}
              name={option.name}
              icon={option.icon}
              onClick={() => {
                navigate(option.path);
                setCurrentIndex(index);
              }}
              // onClick={() => navigateToAnotherScreen(index, option.path)}
              isDashboard={index === currentIndex && option.name !== SidebarEnum.wallets}
              hasNotifications={index === 2}
              path={option.path}
            />
            {option.name === SidebarEnum.favorites || option.name === SidebarEnum.usdCoin ? (
              <div className="border border-sidebarDivider w-full my-8" />
            ) : (
              ""
            )}
            {index === 3 || index === 7 ? "" : <div className="mt-6" />}
          </>
        ))}
      </div>
    </>
  );
};

export default SidebarComponent;

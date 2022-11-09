import {
  bitcoinIcon,
  ethereumIcon,
  gymfyWithTextIcon,
  hammerIcon,
  creditCardIcon,
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
  recharge = "Recarga",
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
  { name: SidebarEnum.recharge, icon: creditCardIcon, path: "/recharge" },
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
        <div className="mt-6 mb-6 w-full flex justify-center">
          <img src={gymfyWithTextIcon} alt="logo" />
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
              isDashboard={index === currentIndex && option.name !== SidebarEnum.wallets}
              hasNotifications={index === 2}
              path={option.path}
            />
            {option.name === SidebarEnum.recharge || option.name === SidebarEnum.usdCoin ? (
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

import {
  bitcoinIcon,
  ethereumIcon,
  gymfyIcon,
  hammerIcon,
  heartIcon,
  helpIcon,
  houseIcon,
  mailIcon,
  plusIcon,
  settingsIcon,
  usdcoinIcon,
} from "~/assets/images";

import { useState } from "react";
import { OptionSidebarComponent } from "~/components/OptionSidebar";

type SidebarListProps = {
  name: string;
  icon: string;
};

enum SidebarEnum {
  dashboard = "Início",
  marketplace = "Mercado",
  inbox = "Caixa de entrada",
  favorites = "Favoritos",
  wallets = "Carteias",
  bitcoin = "Bitcoin",
  ethereum = "Ethereum",
  usdCoin = "USD Coin",
  settings = "Configurações",
  helpFaq = "Ajuda",
}

const SIDEBAR_LIST: Array<SidebarListProps> = [
  { name: SidebarEnum.dashboard, icon: houseIcon },
  { name: SidebarEnum.marketplace, icon: hammerIcon },
  { name: SidebarEnum.inbox, icon: mailIcon },
  { name: SidebarEnum.favorites, icon: heartIcon },
  { name: SidebarEnum.wallets, icon: plusIcon },
  { name: SidebarEnum.bitcoin, icon: bitcoinIcon },
  { name: SidebarEnum.ethereum, icon: ethereumIcon },
  { name: SidebarEnum.usdCoin, icon: usdcoinIcon },
  { name: SidebarEnum.settings, icon: settingsIcon },
  { name: SidebarEnum.helpFaq, icon: helpIcon },
];

const SidebarComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <>
      <div className="h-full px-5 bg-darkGrey flex flex-col items-center">
        <div className="mt-6 mb-12 w-full">
          <img src={gymfyIcon} alt="" />
        </div>
        {SIDEBAR_LIST.map((option, index: number) => (
          <>
            <OptionSidebarComponent
              name={option.name}
              icon={option.icon}
              onClick={() => setCurrentIndex(index)}
              isDashboard={index === currentIndex && option.name !== SidebarEnum.wallets}
              hasNotifications={index === 2}
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

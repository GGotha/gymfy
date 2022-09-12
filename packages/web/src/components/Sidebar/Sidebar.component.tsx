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

const SIDEBAR_LIST = [
  { name: "Dashboard", icon: houseIcon },
  { name: "Auctions", icon: hammerIcon },
  { name: "Inbox", icon: mailIcon },
  { name: "Favorites", icon: heartIcon },
  { name: "Wallets", icon: plusIcon },
  { name: "Bitcoin", icon: bitcoinIcon },
  { name: "Ethereum", icon: ethereumIcon },
  { name: "USD Coin", icon: usdcoinIcon },
  { name: "Settings", icon: settingsIcon },
  { name: "Help & FAQ", icon: helpIcon },
];

const SidebarComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <>
      <div className="h-full px-5 bg-darkGrey flex flex-col items-center">
        <div className="mt-6 mb-12 w-full">
          <img src={gymfyIcon} alt="" />
        </div>
        {SIDEBAR_LIST.map((option, index) => (
          <>
            <OptionSidebarComponent
              name={option.name}
              icon={option.icon}
              onClick={() => setCurrentIndex(index)}
              isDashboard={index === currentIndex}
              hasNotifications={index === 2}
            />
            {index === 3 || index === 7 ? (
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

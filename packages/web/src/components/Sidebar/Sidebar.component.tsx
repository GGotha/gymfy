import { ButtonComponent } from "~/components/Button";
import {
  houseIcon,
  hammerIcon,
  mailIcon,
  heartIcon,
  gymfyIcon,
  plusIcon,
  bitcoinIcon,
  ethereumIcon,
  usdcoinIcon,
  settingsIcon,
  helpIcon,
} from "~/assets/images";

import { OptionSidebarComponent } from "~/components/OptionSidebar";

const SidebarComponent: React.FC = () => {
  return (
    <>
      <div className="h-full px-5 bg-darkGrey flex flex-col items-center">
        <div className="mt-6 mb-12 w-full">
          <img src={gymfyIcon} alt="" />
        </div>
        <ButtonComponent
          backgroundColor="bg-gradient-to-bl from-[#EB001B] to-[#0042FF]"
          width="w-full"
          height="h-[56px]"
          borderRadius="rounded-2xl"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
        >
          <OptionSidebarComponent name="Dashboard" icon={houseIcon} isDashboard />
        </ButtonComponent>
        <div className="mt-6" />
        <OptionSidebarComponent name="Auctions" icon={hammerIcon} />
        <div className="mt-6" />
        <OptionSidebarComponent name="Inbox" icon={mailIcon} hasNotifications />
        <div className="mt-6" />
        <OptionSidebarComponent name="Favorites" icon={heartIcon} />
        <div className="border border-sidebarDivider w-full my-8" />
        <OptionSidebarComponent
          name="Wallets"
          icon={plusIcon}
          iconWidth="w-[33px]"
          iconHeight="h-[33px]"
        />
        <div className="mt-6" />
        <OptionSidebarComponent name="Bitcoin" icon={bitcoinIcon} />
        <div className="mt-6" />
        <OptionSidebarComponent name="Ethereum" icon={ethereumIcon} />
        <div className="mt-6" />
        <OptionSidebarComponent name="USD Coin" icon={usdcoinIcon} />
        <div className="border border-sidebarDivider w-full my-8" />
        <OptionSidebarComponent name="Settings" icon={settingsIcon} />
        <div className="mt-6" />
        <OptionSidebarComponent name="Help & FAQ" icon={helpIcon} />
      </div>
    </>
  );
};

export default SidebarComponent;

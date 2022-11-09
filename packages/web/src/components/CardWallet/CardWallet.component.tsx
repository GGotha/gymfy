import { useContext } from "react";
import { decreaseIcon, graphDecrease, graphIncrease, increaseIcon } from "~/assets/images";
import SkeletonCardWalletComponent from "~/components/SkeletonCardWallet/SkeletonCardWallet.component";
import { BalanceContext } from "~/contexts/BalanceContext";

const CardWalletComponent: React.FC = () => {
  const [balance] = useContext(BalanceContext);

  return (
    <>
      <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
        {!balance ? (
          <SkeletonCardWalletComponent />
        ) : (
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-smoothGrey text-base font-quicksand font-semibold mb-8">
              Seu saldo
            </h1>
            <h1 className="text-white text-3xl font-saira font-semibold">
              <span className="text-xl">GYC </span>
              {balance.gyc_amount ? balance.gyc_amount.toFixed(2) : 0}
            </h1>
            <h1 className="text-white text-3xl font-saira font-semibold mb-7">
              <span className="text-xl">BRL </span>
              {balance.brl_amount ? balance.brl_amount.toFixed(2) : 0}
            </h1>
            <div className="flex justify-between w-full">
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-5">
                  <img src={increaseIcon} alt="" className="mr-3 w-[40px] h-[40px]" />
                  <h1 className="text-smoothGrey text-sm font-saira font-medium">Ganhos</h1>
                </div>
                <h1 className="text-gyGreen text-xl font-oxanium">
                  7.048 <span className="text-[12px] font-bold text-white">ETH</span>
                </h1>
                <div>
                  <img src={graphIncrease} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-5">
                  <img src={decreaseIcon} alt="" className="mr-3 w-[40px] h-[40px]" />
                  <h1 className="text-smoothGrey text-sm font-saira font-medium">Percas</h1>
                </div>
                <h1 className="text-gyRed text-xl font-oxanium">
                  2.013 <span className="text-[12px] font-bold text-white">ETH</span>
                </h1>
                <div>
                  <img src={graphDecrease} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardWalletComponent;

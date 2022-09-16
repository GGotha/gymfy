import { increaseIcon, decreaseIcon, graphIncrease, graphDecrease } from "~/assets/images";

const CardWalletComponent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-smoothGrey text-base font-quicksand font-semibold mb-8">Seu saldo</h1>
          <h1 className="text-white text-4xl font-saira font-semibold mb-20">
            <span className="text-xl">ETH </span>21.533.10
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
      </div>
    </>
  );
};

export default CardWalletComponent;

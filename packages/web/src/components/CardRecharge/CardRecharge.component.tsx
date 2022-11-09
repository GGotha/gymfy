import { useState } from "react";
import { ModalFormRechargeCreditCardComponent } from "~/components/ModalFormRechargeCreditCard";
import { ModalFormRechargePIXComponent } from "~/components/ModalFormRechargePIX";

type CardRechargeProps = {
  name: string;
  image: string;
};

const CardRechargeComponent: React.FC<CardRechargeProps> = ({ name, image }) => {
  const [isOpenCreditCard, setIsOpenCreditCard] = useState(false);
  const [isOpenPIX, setIsOpenPIX] = useState(false);

  return (
    <>
      <div
        className="flex flex-col justify-between h-full bg-black rounded-lg p-4 cursor-pointer"
        onClick={() => {
          if (name === "Cartão de Crédito") {
            return setIsOpenCreditCard(true);
          }

          if (name === "PIX") {
            return setIsOpenPIX(true);
          }

          return true;
        }}
      >
        <div className="flex justify-center flex-col items-center h-full">
          <h1 className="text-smoothGrey text-base font-quicksand font-semibold">{name}</h1>
          <div className="flex justify-center w-full h-full items-center">
            <div className="flex flex-col items-center">
              <img src={image} alt="" width={100} />
            </div>
          </div>
        </div>
      </div>
      <ModalFormRechargeCreditCardComponent
        isOpen={isOpenCreditCard}
        closeModal={() => setIsOpenCreditCard(false)}
        name={name}
      />
      <ModalFormRechargePIXComponent
        isOpen={isOpenPIX}
        closeModal={() => setIsOpenPIX(false)}
        name={name}
      />
    </>
  );
};

export default CardRechargeComponent;

import FadeIn from "react-fade-in";
import { creditCardIcon, pixIcon } from "~/assets/images";
import CardComponent from "~/components/Card/Card.component";
import { CardRechargeComponent } from "~/components/CardRecharge";

const RechargeScreen: React.FC = () => {
  return (
    <>
      <div className="bg-black bg-opacity-95 h-full w-full p-8 flex">
        <FadeIn>
          <h1 className="text-white text-2xl font-saira font-semibold mb-5">Recarga</h1>
          <div className="flex items-center justify-center">
            <CardComponent size={{ height: "h-[305px]", width: "w-[366px]" }}>
              <CardRechargeComponent name="Cartão de Crédito" image={creditCardIcon} />
            </CardComponent>
            <div className="ml-40" />
            <CardComponent size={{ height: "h-[305px]", width: "w-[366px]" }}>
              <CardRechargeComponent name="PIX" image={pixIcon} />
            </CardComponent>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default RechargeScreen;

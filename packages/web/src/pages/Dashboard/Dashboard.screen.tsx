import CardComponent from "~/components/Card/Card.component";
import { CardWalletComponent } from "~/components/CardWallet";

const DashboardScreen: React.FC = () => {
  return (
    <>
      <div className="bg-black bg-opacity-95 h-full w-full p-8 flex">
        <div>
          <h1 className="text-white text-2xl font-saira font-semibold mb-5">Minha carteira</h1>
          <CardComponent>
            <CardWalletComponent />
          </CardComponent>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;

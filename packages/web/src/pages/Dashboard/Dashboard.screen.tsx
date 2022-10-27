import { GraphQLClient } from "graphql-request";
import { useContext } from "react";
import FadeIn from "react-fade-in";
import CardComponent from "~/components/Card/Card.component";
import { CardActivePlanComponent } from "~/components/CardActivePlan";
import { CardCheckinComponent } from "~/components/CardCheckin";
import { CardWalletComponent } from "~/components/CardWallet";
import { BalanceContext } from "~/contexts/BalanceContext";
import { useGetBalanceQuery } from "~/generated/graphql";
import { useAuth } from "~/hooks/useAuth";

const DashboardScreen: React.FC = () => {
  const [user] = useAuth();
  const [, setBalance] = useContext(BalanceContext);

  const { plan } = user;

  useGetBalanceQuery(
    new GraphQLClient("http://localhost:4000", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }),
    {},
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setBalance(data?.getBalance);
      },
    },
  );

  return (
    <>
      <div className="bg-black bg-opacity-95 h-full w-full p-8 flex">
        <FadeIn>
          <h1 className="text-white text-2xl font-saira font-semibold mb-5">Início</h1>
          <div className="flex">
            <CardComponent>
              <CardWalletComponent />
            </CardComponent>
            <div className="mr-20" />
            {!plan ? (
              <></>
            ) : (
              <div className="mr-20">
                <CardComponent width="w-[366px]" height="h-[445px]">
                  <CardActivePlanComponent
                    name={plan.name}
                    image={plan.image}
                    expiredAt={user.plan_expired_at}
                  />
                </CardComponent>
              </div>
            )}
            <CardComponent width="w-[366px]" height="h-[275px]">
              <CardCheckinComponent />
            </CardComponent>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default DashboardScreen;

import { GraphQLClient } from "graphql-request";
import { useContext } from "react";
import FadeIn from "react-fade-in";
import CardComponent from "~/components/Card/Card.component";
import { CardActivePlanComponent } from "~/components/CardActivePlan";
import { CardCheckinComponent } from "~/components/CardCheckin";
import { CardWalletComponent } from "~/components/CardWallet";
import { BalanceContext } from "~/contexts/BalanceContext";
import { useGetBalanceQuery } from "~/generated/graphql";
import { API_URL } from "~/globals/graphql-client";
import { useAuth } from "~/hooks/useAuth";
import { rubyIcon, diamondIcon, goldIcon } from "~/assets/images";

const DashboardScreen: React.FC = () => {
  const [user] = useAuth();
  const [, setBalance] = useContext(BalanceContext);

  const { plan } = user;

  useGetBalanceQuery(
    new GraphQLClient(API_URL, {
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

  function decideWhichImageUse(namePlan: string): string {
    if (namePlan === "Ruby") {
      return rubyIcon;
    }

    if (namePlan === "Diamond") {
      return diamondIcon;
    }

    return goldIcon;
  }

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
                <CardComponent size={{ height: "h-[445px]", width: "w-[366px]" }}>
                  <CardActivePlanComponent
                    name={plan.name}
                    description={plan.description}
                    image={decideWhichImageUse(plan.name)}
                    expiredAt={user.plan_expired_at}
                  />
                </CardComponent>
              </div>
            )}
            <CardComponent size={{ height: "h-[275px]", width: "w-[366px]" }}>
              <CardCheckinComponent />
            </CardComponent>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default DashboardScreen;

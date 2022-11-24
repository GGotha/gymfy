import { GraphQLClient } from "graphql-request";
import FadeIn from "react-fade-in";
import CardComponent from "~/components/Card/Card.component";
import { CardPlanComponent } from "~/components/CardPlan";
import { LoaderComponent } from "~/components/Loader";
import { useGetPlansQuery } from "~/generated/graphql";
import { API_URL } from "~/globals/graphql-client";
import { useAuth } from "~/hooks/useAuth";
import { rubyIcon, diamondIcon, goldIcon } from "~/assets/images";

const PlanScreen: React.FC = () => {
  const [user] = useAuth();

  const { data, isFetching } = useGetPlansQuery(
    new GraphQLClient(API_URL, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }),
  );

  function sortByPlanPriceAndFormatAmount() {
    return data?.getPlans
      .sort((a, b) => {
        return b.brl_amount - a.brl_amount;
      })
      .map((plan) => {
        return { ...plan, amountFormatted: plan.brl_amount.toLocaleString("pt-br") };
      });
  }

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
          <h1 className="text-white text-2xl font-saira font-semibold mb-5">Planos</h1>
          <div className="flex items-center justify-center">
            {isFetching ? (
              <LoaderComponent />
            ) : (
              <>
                {sortByPlanPriceAndFormatAmount()!.map((plan) => (
                  <>
                    <CardComponent size={{ height: "h-[445px]", width: "w-[366px]" }}>
                      <CardPlanComponent
                        id={plan.id}
                        name={`Plano ${plan.name}`}
                        description={plan.description}
                        amount={plan.amountFormatted}
                        image={decideWhichImageUse(plan.name)}
                      />
                    </CardComponent>
                    <div className="ml-40" />
                  </>
                ))}
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default PlanScreen;

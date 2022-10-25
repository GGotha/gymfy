import { GraphQLClient } from "graphql-request";
import CardComponent from "~/components/Card/Card.component";
import { CardPlanComponent } from "~/components/CardPlan";
import { LoaderComponent } from "~/components/Loader";
import { useGetPlansQuery } from "~/generated/graphql";
import { useAuth } from "~/hooks/useAuth";

const PlanScreen: React.FC = () => {
  const [user] = useAuth();

  const { data, isFetching } = useGetPlansQuery(
    new GraphQLClient("http://localhost:4000", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }),
  );

  return (
    <>
      <div className="bg-black bg-opacity-95 h-full w-full p-8 flex">
        <div>
          <h1 className="text-white text-2xl font-saira font-semibold mb-5">Planos</h1>
          <div className="flex items-center justify-center">
            {isFetching ? (
              <LoaderComponent />
            ) : (
              <>
                {data?.getPlans.map((plan) => (
                  <>
                    <CardComponent width="w-[366px]" height="h-[445px]">
                      <CardPlanComponent
                        id={plan.id}
                        name={`Plano ${plan.name}`}
                        amount={plan.brl_amount}
                        image={plan.image}
                      />
                    </CardComponent>
                    <div className="ml-40" />
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanScreen;

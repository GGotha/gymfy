/* eslint-disable import/no-duplicates */
import { useQueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { toast } from "react-toastify";
import { ButtonComponent } from "~/components/Button";
import { LoaderComponent } from "~/components/Loader";
import { useCreateCheckinMutation } from "~/generated/graphql";
import { API_URL } from "~/globals/graphql-client";
import { useAuth } from "~/hooks/useAuth";

const CardCheckinComponent: React.FC = () => {
  const [user] = useAuth();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useCreateCheckinMutation(
    new GraphQLClient(API_URL, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["GetBalance"]);
        return toast.success("Checkin feito com sucesso!");
      },
      onError: (err: any) => {
        const errMessage = err.response.errors[0].message;

        if (errMessage === "Sorry! You need a plan before you do a Checkin") {
          return toast.warning("Você precisa de um plano para realizar o checkin!");
        }

        if (errMessage === "You can only do one checkin per day!") {
          return toast.warning("Você já fez um checkin hoje!");
        }

        return toast.error(
          "Ocorreu uma falha com o servidor, por favor, tente novamente! Caso a falha persista, contate um administrador!",
        );
      },
    },
  );

  function runTest() {
    mutateAsync({});
  }

  return (
    <>
      <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-smoothGrey text-base font-quicksand font-semibold mb-8">
            Faça seu checkin
          </h1>

          <h1 className="text-smoothGrey text-sm text-center font-saira mb-16">
            Atenção: Você só pode realizar o checkin, uma vez por dia!
          </h1>
          {/* <div className="flex justify-center w-full ml-20">
            <div className="flex flex-col items-center">
              <img src={image} alt="" />
            </div>
          </div> */}
          <div className="w-full flex">
            <ButtonComponent
              hasBackgroundShadow={false}
              backgroundColor="bg-gyGreen"
              backgroundColorHover="hover:bg-zinc-900"
              height="h-[50px]"
              borderRadius="rounded-2xl"
              width="w-full"
              onClick={() => runTest()}
            >
              {isLoading ? (
                <div className="flex justify-center">
                  <LoaderComponent />
                </div>
              ) : (
                "Fazer Checkin"
              )}
            </ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCheckinComponent;

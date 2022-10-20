import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import { toast } from "react-toastify";
import { ButtonComponent } from "~/components/Button";
import { LoaderComponent } from "~/components/Loader";
import { ModalComponent } from "~/components/Modal";
import { useChoosePlanMutation } from "~/generated/graphql";
import { useAuth } from "~/hooks/useAuth";

type CardPlanProps = {
  id: string;
  name: string;
  amount: number;
  image: string;
};

const CardPlanComponent: React.FC<CardPlanProps> = ({ id, name, amount, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();

  const { mutateAsync, isLoading } = useChoosePlanMutation(
    new GraphQLClient("http://localhost:4000", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    {
      onSuccess: () => {
        return toast.success("Plano comprado com sucesso!");
      },
      onError: (err: any) => {
        const errMessage = err.response.errors[0].message;

        if (errMessage === "You already have a plan!") {
          return toast.error("Você já tem um plano ativo!");
        }

        return toast.error(
          "Ocorreu um erro com o servidor, por favor, tente novamente! Caso o erro persistir, contate um administrador!",
        );
      },
    },
  );

  return (
    <>
      <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-smoothGrey text-base font-quicksand font-semibold mb-8">{name}</h1>
          <h1 className="text-white text-4xl font-saira font-semibold mb-20">
            <span className="text-xl">BRL </span>
            {amount}
          </h1>
          <div className="flex justify-center w-full ml-20">
            <div className="flex flex-col items-center">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="w-full">
            <ButtonComponent
              hasBackgroundShadow={false}
              backgroundColor="bg-gradient-to-bl from-[#EB001B] to-[#0042FF]"
              backgroundColorHover="hover:bg-zinc-900"
              height="h-[50px]"
              borderRadius="rounded-2xl"
              width="w-full"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              {isLoading ? <LoaderComponent /> : "Comprar"}
            </ButtonComponent>
          </div>
        </div>
      </div>
      <ModalComponent
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        openModal={() => setIsOpen(true)}
        title="Você deseja comprar esse plano?"
        content="Ao comprar esse plano, será debitado o valor da sua conta automaticamente"
        confirmButton={() => mutateAsync({ idPlan: id })}
      />
    </>
  );
};

export default CardPlanComponent;

import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import { toast } from "react-toastify";
import { ButtonComponent } from "~/components/Button";
import { LoaderComponent } from "~/components/Loader";
import { ModalComponent } from "~/components/Modal";
import { useChoosePlanMutation } from "~/generated/graphql";
import { useAuth } from "~/hooks/useAuth";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import Tooltip from "react-tooltip";
import { API_URL } from "~/globals/graphql-client";

type CardPlanProps = {
  id: string;
  name: string;
  description: string;
  amount: string;
  image: string;
};

const CardPlanComponent: React.FC<CardPlanProps> = ({ id, name, description, amount, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useAuth();

  const { mutateAsync, isLoading } = useChoosePlanMutation(
    new GraphQLClient(API_URL, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }),
    {
      onSuccess: ({ choosePlan }) => {
        const { plan, plan_expired_at } = choosePlan;

        user.plan = plan;
        user.plan_expired_at = plan_expired_at;

        setUser({ ...user });

        return toast.success("Plano comprado com sucesso!");
      },
      onError: (err: any) => {
        const errMessage = err.response.errors[0].message;

        if (errMessage === "You don´t have money to buy this plan! Please do a Recharge") {
          return toast.error(
            "Você não tem saldo para realizar a compra deste plano! Por favor, faça uma recarga!",
          );
        }

        if (errMessage === "You already have a plan!") {
          return toast.error("Você já tem um plano ativo!");
        }

        return toast.error(
          "Ocorreu uma falha com o servidor, por favor, tente novamente! Caso a falha persista, contate um administrador!",
        );
      },
    },
  );

  return (
    <>
      <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
        <div className="relative" data-tip data-for={`tooltip-${name}`}>
          <div className="absolute -top-5 -right-5">
            <ExclamationCircleIcon className="h-5 fill-neutral-700" aria-hidden="true" />
          </div>
        </div>
        <Tooltip id={`tooltip-${name}`}>
          <span>{description}</span>
        </Tooltip>
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
              {isLoading ? (
                <div className="flex justify-center">
                  <LoaderComponent />
                </div>
              ) : (
                "Comprar"
              )}
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

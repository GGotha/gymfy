/* eslint-disable import/no-duplicates */
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import { ptBR } from "date-fns/locale";
import { GraphQLClient } from "graphql-request";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import Tooltip from "react-tooltip";
import { ButtonComponent } from "~/components/Button";
import { LoaderComponent } from "~/components/Loader";
import { ModalComponent } from "~/components/Modal";
import { useCancelPlanMutation } from "~/generated/graphql";
import { API_URL } from "~/globals/graphql-client";
import { useAuth } from "~/hooks/useAuth";

type CardActivePlanProps = {
  name: string;
  image: string;
  expiredAt: string;
  description: string;
};

const CardActivePlanComponent: React.FC<CardActivePlanProps> = ({
  name,
  description,
  image,
  expiredAt,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useAuth();

  const expiredAtFormatted = useMemo(() => {
    const formatToDate = parseISO(expiredAt);

    return format(formatToDate, "'dia' dd 'de' MMMM'", { locale: ptBR });
  }, []);

  const { mutateAsync, isLoading } = useCancelPlanMutation(
    new GraphQLClient(API_URL, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }),
    {
      onSuccess: () => {
        user.plan = null;
        user.plan_expired_at = null;

        setUser({ ...user });

        return toast.success("Plano cancelado com sucesso!");
      },
      onError: () => {
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
          <h1 className="text-smoothGrey text-base font-quicksand font-semibold mb-8">
            Plano Ativo
          </h1>
          <h1 className="text-white text-2xl font-saira font-semibold mb-0">
            <span className="text-xl"></span>
            Plano {name}
          </h1>
          <h1 className="text-smoothGrey text-base font-saira mb-16">
            <span className="text-xl"></span>
            Expira {expiredAtFormatted}
          </h1>
          <div className="flex justify-center w-full ml-20">
            <div className="flex flex-col items-center">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="w-full flex">
            <ButtonComponent
              hasBackgroundShadow={false}
              backgroundColor="bg-[#EB001B]"
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
                "Cancelar"
              )}
            </ButtonComponent>
          </div>
        </div>
      </div>
      <ModalComponent
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        openModal={() => setIsOpen(true)}
        title="Você realmente deseja cancelar esse plano?"
        content="Ao cancelar esse plano, o valor pago não voltará para sua conta!"
        confirmButton={() => mutateAsync({})}
      />
    </>
  );
};

export default CardActivePlanComponent;

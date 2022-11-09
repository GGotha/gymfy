import { Dialog, Transition } from "@headlessui/react";
import { GraphQLClient } from "graphql-request";
import { Fragment, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { InputComponent } from "~/components/Input";
import { useRechargeWithCreditCardMutation } from "~/generated/graphql";
import { useAuth } from "~/hooks/useAuth";

type ModalComponentProps = {
  name: string;
  isOpen: boolean;
  closeModal: any;
};

type CardRechargeProps = {
  name: string;
  image: string;
};

type CreditCardType = {
  amount: number;
  cardNumber: string;
  cardHolder: string;
  cardValidThru: string;
  cardCvv: string;
};

const ModalFormRechargeCreditCardComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  closeModal,
  name,
}) => {
  const [user] = useAuth();
  const { register, handleSubmit } = useForm<CreditCardType>();

  const { mutateAsync, isSuccess } = useRechargeWithCreditCardMutation(
    new GraphQLClient("http://localhost:4000", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }),
    {
      onSuccess: () => {
        closeModal();
        return toast.success("Recarga feita com sucesso!");
      },
      onError: () => {
        return toast.error(
          "Ocorreu uma falha com o servidor, por favor, tente novamente! Caso a falha persista, contate um administrador!",
        );
      },
    },
  );

  const onSubmit = useCallback(
    (data: CreditCardType) => {
      let { cardCvv, cardNumber, cardHolder, amount, cardValidThru } = data;

      amount = Number(amount);

      cardNumber = cardNumber.toString();
      cardCvv = cardCvv.toString();
      cardHolder = cardHolder.toString();
      cardValidThru = cardValidThru.toString();

      mutateAsync({ amount, cardNumber, cardHolder, cardValidThru, cardCvv });
    },
    [isSuccess],
  );

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <form onSubmit={handleSubmit(onSubmit)} className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-darkGrey p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-white">
                    Recarga com {name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500"></p>
                  </div>

                  <div className="mb-5">
                    <div className="mt-5">
                      <InputComponent
                        placeholder="Quantidade da recarga"
                        type="amount"
                        props={{ ...register("amount") }}
                      />
                    </div>
                    <div className="mt-5">
                      <InputComponent
                        placeholder="Titular do Cartão"
                        type="cardHolder"
                        props={{ ...register("cardHolder") }}
                      />
                    </div>
                    <div className="mt-5">
                      <InputComponent
                        placeholder="Número do Cartão"
                        type="cardNumber"
                        props={{ ...register("cardNumber") }}
                      />
                    </div>
                    <div className="mt-5 w-full flex">
                      <InputComponent
                        placeholder="Validade do cartão"
                        type="cardValidThru"
                        props={{ ...register("cardValidThru") }}
                      />
                      <div className="mr-5" />
                      <InputComponent
                        placeholder="CVV do Cartão"
                        type="cardCvv"
                        props={{ ...register("cardCvv") }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancelar
                    </button>
                    <div className="mr-3" />
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border-transparent bg-gradient-to-bl from-[#EB001B] to-[#0042FF] px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Confirmar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </form>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalFormRechargeCreditCardComponent;

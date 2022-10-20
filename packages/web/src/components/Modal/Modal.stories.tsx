import Modal from "./Modal.component";

export default {
  title: "components/Modal",
  component: Modal,
};

export const ModalComponent = () => {
  return (
    <Modal
      isOpen={true}
      closeModal={true}
      openModal={false}
      title="Você deseja comprar esse plano?"
      content="Ao comprar esse plano, será debitado o valor da sua conta automaticamente"
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      confirmButton={() => {}}
    />
  );
};

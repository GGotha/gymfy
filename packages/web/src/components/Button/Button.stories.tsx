import Button from "./Button.component";

export default {
  title: "components/Button",
  component: Button,
};

export const BackgroundColor = () => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <Button onClick={() => {}} backgroundColor="bg-zinc-900">
      Entrar
    </Button>
  );
};

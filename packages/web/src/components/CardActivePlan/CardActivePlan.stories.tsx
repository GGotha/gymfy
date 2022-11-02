import CardActivePlan from "./CardActivePlan.component";

export default {
  title: "components/CardActivePlan",
  component: CardActivePlan,
};

export const BackgroundColor = () => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <CardActivePlan name="teste" description="teste" image="teste" expiredAt="teste" />
  );
};

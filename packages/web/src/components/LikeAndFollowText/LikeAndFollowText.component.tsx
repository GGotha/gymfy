import FadeIn from "react-fade-in";

const LikeAndFollowTextComponent: React.FC = () => {
  return (
    <FadeIn transitionDuration={1000}>
      <h1 className="text-3xl sm:text-6xl md:text-6xl md:leading-normal lg:text-6xl lg:leading-normal 2xl:text-8xl 2xl:leading-normal text-white font-lato">
        All{" "}
        <span className="text-transparent bg-gradient-to-r from-gradientOne to-gradientTwo bg-clip-text">
          progress
        </span>{" "}
        takes place outside the{" "}
        <span className="text-transparent bg-gradient-to-r from-gradientOne via-gradientTwo to-gradientTwo bg-clip-text">
          comfort
        </span>{" "}
        zone.
      </h1>
    </FadeIn>
  );
};

export default LikeAndFollowTextComponent;

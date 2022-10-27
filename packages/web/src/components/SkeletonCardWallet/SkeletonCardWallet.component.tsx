import Skeleton from "react-loading-skeleton";

const SkeletonCardWalletComponent: React.FC = () => {
  return (
    <>
      <div className="flex justify-center flex-col w-full items-center">
        <Skeleton
          count={1}
          baseColor="#131313"
          highlightColor="#0D0D0D"
          duration={1.5}
          width={150}
        />
        <div className="mb-10" />
        <Skeleton
          count={1}
          baseColor="#131313"
          highlightColor="#0D0D0D"
          duration={1.5}
          width={300}
          height={40}
        />
        <Skeleton
          count={1}
          baseColor="#131313"
          highlightColor="#0D0D0D"
          duration={1.5}
          width={300}
          height={40}
        />
        <div className="mb-10" />
        <div className="flex">
          <Skeleton
            count={1}
            baseColor="#131313"
            highlightColor="#0D0D0D"
            duration={1.5}
            width={150}
            height={140}
          />
          <div className="mx-5" />
          <Skeleton
            count={1}
            baseColor="#131313"
            highlightColor="#0D0D0D"
            duration={1.5}
            width={150}
            height={140}
          />
        </div>
      </div>
    </>
  );
};

export default SkeletonCardWalletComponent;

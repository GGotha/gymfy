import { CardComponent } from "~/components/Card";

const LoginScreen: React.FC = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/wallpaper.jpg')] bg-no-repeat bg-cover h-screen 2xl:h-full w-full">
        <div className="bg-black bg-opacity-90 h-screen w-full min-h-[900px]">
          <CardComponent>
            <h1>Login</h1>
          </CardComponent>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;

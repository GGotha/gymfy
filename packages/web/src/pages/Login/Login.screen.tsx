import { GraphQLClient } from "graphql-request";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { gymfyIcon } from "~/assets/images";
import { ButtonComponent } from "~/components/Button";
import { CardComponent } from "~/components/Card";
import { InputComponent } from "~/components/Input";
import LoaderComponent from "~/components/Loader/Loader.component";
import { useAuthenticateMutation } from "~/generated/graphql";
import { useAuth } from "~/hooks/useAuth";

const API_URL = `http://localhost:4000`;

type LoginAuthenticate = {
  email: string;
  password: string;
};

const graphQLClient = new GraphQLClient(API_URL);
const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginAuthenticate>();
  const { signIn } = useAuth();

  const { mutateAsync, isLoading, isSuccess } = useAuthenticateMutation(graphQLClient, {
    onSuccess: (data) => {
      const { user, token } = data.authenticate;

      signIn({ user, token });

      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Senha Inválida, tente novamente!");
    },
  });

  const onSubmit = useCallback(
    (data: LoginAuthenticate) => {
      const { email, password } = data;

      mutateAsync({ email, password });
    },
    [isSuccess],
  );

  return (
    <>
      <div className="bg-[url('./assets/images/wallpaper.jpg')] bg-no-repeat bg-cover h-screen 2xl:h-full w-full">
        <div className="bg-black bg-opacity-90 h-screen w-full min-h-[900px] flex justify-center items-center">
          <CardComponent height="h-[520px]">
            <div className="flex justify-center pt-10">
              <img src={gymfyIcon} alt="" width={70} />
            </div>
            <div className="flex items-center flex-col h-full px-5 pt-20">
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                  placeholder="E-mail"
                  type="email"
                  props={{ ...register("email") }}
                />
                <div className="my-2" />
                <InputComponent
                  placeholder="Senha"
                  type="password"
                  props={{ ...register("password") }}
                />
                <div className="mb-10" />
                <div className="w-full flex">
                  <ButtonComponent
                    backgroundColor="bg-secondaryGreen"
                    backgroundColorHover="hover:bg-zinc-900"
                    hasBackgroundShadow={false}
                    width="w-full"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Cadastrar
                  </ButtonComponent>
                  <div className="mx-2" />
                  <ButtonComponent
                    backgroundColor="bg-gradientOne"
                    backgroundColorHover="hover:bg-zinc-900"
                    hasBackgroundShadow={false}
                    width="w-full"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <LoaderComponent />
                      </div>
                    ) : (
                      "Entrar"
                    )}
                  </ButtonComponent>
                </div>
              </form>
            </div>
          </CardComponent>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;

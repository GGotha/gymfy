import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { gymfyIcon } from "~/assets/images";
import { ButtonComponent } from "~/components/Button";
import { CardComponent } from "~/components/Card";
import { InputComponent } from "~/components/Input";
import { LoaderComponent } from "~/components/Loader";
import { useAuthenticateMutation } from "~/generated/graphql";
import { graphQLClient } from "~/globals/graphql-client";
import { useAuth } from "~/hooks/useAuth";

type LoginAuthenticate = {
  email: string;
  password: string;
};

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginAuthenticate>();
  const [, setStateUser] = useAuth();

  const { mutateAsync, isLoading, isSuccess } = useAuthenticateMutation(graphQLClient, {
    onSuccess: (data) => {
      const { user, token } = data.authenticate;

      setStateUser({ ...user, token });

      navigate("/dashboard");
    },
    onError: (err: any) => {
      const errMessage = err.response.errors[0].message;

      if (errMessage === "E-mail or password invalid") {
        return toast.error("Senha Inválida, tente novamente!");
      }

      return toast.error(
        "Ocorreu um erro com o servidor, por favor, tente novamente! Caso o erro persistir, contate um administrador!",
      );
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
                <div className="mb-5" />
                <div className="w-full">
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
                <div className="flex justify-center mt-2">
                  <h1 className="text-primaryGrey text-sm">
                    <span
                      onClick={() => {
                        navigate("/register");
                      }}
                      className="cursor-pointer underline"
                    >
                      Clique aqui
                    </span>{" "}
                    para se cadastrar
                  </h1>
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

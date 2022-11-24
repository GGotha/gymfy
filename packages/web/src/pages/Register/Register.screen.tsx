import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { gymfyWithTextIcon } from "~/assets/images";
import { ButtonComponent } from "~/components/Button";
import { CardComponent } from "~/components/Card";
import { InputComponent } from "~/components/Input";
import { LoaderComponent } from "~/components/Loader";
import { useRegisterMutation } from "~/generated/graphql";
import { useAuth } from "~/hooks/useAuth";
import { graphQLClient } from "~/globals/graphql-client";
import FadeIn from "react-fade-in";

type RegisterType = {
  name: string;
  email: string;
  password: string;
};

const RegisterScreen: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterType>();
  const [, setStateUser] = useAuth();

  const { mutateAsync, isLoading, isSuccess } = useRegisterMutation(graphQLClient, {
    onSuccess: (data) => {
      const { user, token } = data.register;

      setStateUser({ ...user, token });

      navigate("/dashboard");
    },
    onError: (err: any) => {
      const errMessage = err.response.errors[0].message;

      if (errMessage === "This user already exists!") {
        return toast.error("Já existe um usuário com este e-mail! Tente outro e-mail, por favor.");
      }

      return toast.error(
        "Ocorreu uma falha com o servidor, por favor, tente novamente! Caso a falha persista, contate um administrador!",
      );
    },
  });

  const onSubmit = useCallback(
    (data: RegisterType) => {
      const { name, email, password } = data;

      mutateAsync({ name, email, password });
    },
    [isSuccess],
  );

  return (
    <>
      <div className="bg-[url('./assets/images/wallpaper.jpg')] bg-no-repeat bg-cover h-screen 2xl:h-full w-full">
        <FadeIn className="bg-black bg-opacity-90 h-screen w-full min-h-[900px] flex justify-center items-center">
          <CardComponent size={{ height: "h-[520px]" }}>
            <div className="flex justify-center pt-10">
              <img src={gymfyWithTextIcon} alt="logo" width={140} />
            </div>
            <div className="flex items-center flex-col h-full px-5 pt-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent placeholder="Nome" type="name" props={{ ...register("name") }} />
                <div className="my-2" />
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
                <ButtonComponent
                  backgroundColor="bg-gyGreen"
                  backgroundColorHover="hover:bg-gradientOne"
                  hasBackgroundShadow={false}
                  width="w-full"
                >
                  {isLoading ? (
                    <div className="flex justify-center">
                      <LoaderComponent />
                    </div>
                  ) : (
                    "Cadastrar"
                  )}
                </ButtonComponent>
                <div className="flex justify-center mt-2">
                  <h1 className="text-primaryGrey text-sm">
                    <span
                      onClick={() => {
                        navigate("/login");
                      }}
                      className="cursor-pointer underline"
                    >
                      Clique aqui
                    </span>{" "}
                    para voltar
                  </h1>
                </div>
              </form>
            </div>
          </CardComponent>
        </FadeIn>
      </div>
    </>
  );
};

export default RegisterScreen;

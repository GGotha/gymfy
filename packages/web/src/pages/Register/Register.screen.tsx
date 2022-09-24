import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { gymfyIcon } from "~/assets/images";
import { ButtonComponent } from "~/components/Button";
import { CardComponent } from "~/components/Card";
import { InputComponent } from "~/components/Input";
import { LoaderComponent } from "~/components/Loader";
import { useRegisterMutation } from "~/generated/graphql";
import { useAuth } from "~/hooks/useAuth";
import { graphQLClient } from "~/globals/graphql-client";

type RegisterType = {
  name: string;
  email: string;
  password: string;
};

const RegisterScreen: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterType>();
  const { signIn } = useAuth();

  const { mutateAsync, isLoading, isSuccess } = useRegisterMutation(graphQLClient, {
    onSuccess: (data) => {
      const { user, token } = data.register;

      signIn({ user, token });

      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Senha Inválida, tente novamente!");
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
        <div className="bg-black bg-opacity-90 h-screen w-full min-h-[900px] flex justify-center items-center">
          <CardComponent height="h-[520px]">
            <div className="flex justify-center pt-10">
              <img src={gymfyIcon} alt="" width={70} />
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
                <div className="w-full">
                  <ButtonComponent
                    backgroundColor="bg-gyGreen"
                    backgroundColorHover="hover:bg-gradientOne"
                    hasBackgroundShadow={false}
                    width="w-full"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <LoaderComponent />
                      </div>
                    ) : (
                      "Cadastrar"
                    )}
                  </ButtonComponent>
                </div>
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
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;

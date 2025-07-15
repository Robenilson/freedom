import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import Toast from "react-native-toast-message";
import * as Yup from "yup";
import { AuthContext } from "@/data/contexts/authContext";
export const useRegisterLogic = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { createLogin } = useContext(AuthContext);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("O Nome é obrigatório"),
    email: Yup.string().required("O Email é obrigatório").email(),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email")], "Os e-mails precisam ser iguais")
      .required("A confirmação de e-mail é obrigatória"),
    password: Yup.string().required("A senha é obrigatória").min(6),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "As senhas precisam ser iguais")
      .required("A confirmação de senha é obrigatória."),
    age: Yup.number().required("A idade é obrigatória"),
    tel: Yup.number(),
    cpf: Yup.string().required("O CPF é obrigatório."),
  });

  const handleCreateUser = async (
    email: string,
    password: string,
    name: string,
    tel: string,
    cpf: string,
    age: number
  ) => {
    setLoading(true);
    try { 
    const result = await createLogin(email, password, name, tel, cpf, age);
      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso!",
        text2: "Seja Bem-vindo!",
      });

      return result;
    } catch (error: any) {
      if (error.response?.data?.message) {
        const message = error.response.data.message;

        if (message.includes("Email já cadastrado")) {
          Toast.show({
            type: "error",
            text1: "Email já cadastrado, faça login",
          });
          router.navigate("/login");
        }

        if (message.includes("Cpf já cadastrado")) {
          Toast.show({
            type: "error",
            text1: "CPF já cadastrado, faça login",
          });
          router.navigate("/login");
        }
      }
      console.error(error);
      return;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    validationSchema,
    handleCreateUser,
  };
};





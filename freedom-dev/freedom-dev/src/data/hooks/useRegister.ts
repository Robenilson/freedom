// src/hooks/useRegister.ts

import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { AuthContext } from "@/data/contexts/authContext";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { createLogin, setAuthData } = useContext(AuthContext); // Assuma que setAuthData armazena token e user

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

      const { token, user, profile } = result.data;

      // ⚠️ Armazene token e user no contexto ou AsyncStorage
      // Supondo que você tenha um método setAuthData no AuthContext:
      setAuthData({ token, user, profile }); // Ajuste conforme seu contexto

      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso!",
        text2: "Seja Bem-vindo!",
      });

      // Redireciona para a home (ajuste o caminho se necessário)
      router.replace("/home/(tabs)");
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "";

      if (errorMessage.includes("Email já cadastrado")) {
        Toast.show({
          type: "error",
          text1: "Email já cadastrado, faça login",
        });
        router.push("/login");
      } else if (errorMessage.includes("Cpf já cadastrado")) {
        Toast.show({
          type: "error",
          text1: "CPF já cadastrado, faça login",
        });
        router.push("/login");
      } else {
        Toast.show({
          type: "error",
          text1: "Erro ao cadastrar",
          text2: "Tente novamente",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateUser, loading };
};

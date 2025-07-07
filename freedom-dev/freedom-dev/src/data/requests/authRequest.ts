import axios from "axios";
import { CreateUserWithProfile } from "../types/user";

async function signIn(emailClient: string, password: string) {
  try {
    console.log(emailClient, password );

    const url = " http://192.168.100.19:3000/auth/auth";

    if (!url) {
      throw new Error("Url nao definida");
    }

    const { data, status } = await axios.post(url, {
      email: emailClient,
      password,
    });

    if (status !== 200) {
      throw new Error("Erro de conexão");
    }

    const { token, email } = data;

    console.log("token:", token, "email: ", email);

    return { email, token };
  } catch (err) {
    console.error(err);
    throw err;
  }
}


export const createUser = async (email, password, name, tel, cpf, age) => {
  try {
    const response = await axios.post("http://192.168.100.19:3000/auth/register", {
      email,
      password,
      name,
      tel,
      cpf,
      age
    });

    return response.data; // ou response, se precisar de mais dados
  } catch (error) {
    console.error("Erro ao criar usuário:", error.response?.data || error.message);
    throw error;
  }
};
export const authService = { signIn, createUser };

import axios from "axios";
import { CreateUserWithProfile } from "../types/user";

async function signIn(emailClient: string, password: string) {
  try {
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

async function createUser(
  email: string,
  password: string,
  name: string,
  tel: string,
  cpf: string,
  age: number,
  
) {
  try {

    
    const url = "http://192.168.100.19:3000/auth/register";

    if (!url) {
      throw new Error("Url nao definida");
    }

    console.log({
      email,
      password,
      name,
      tel,
      cpf,
      age,
    } );

    const response: CreateUserWithProfile = await axios.post(url, {
      email,
      password,
      name,
      tel,
      cpf,
      age,
    });

    console.log("response axios", response);

    return response;
  } catch (error) {
    console.error("erro interno no servidor");
    throw error;
  }
}

export const authService = { signIn, createUser };

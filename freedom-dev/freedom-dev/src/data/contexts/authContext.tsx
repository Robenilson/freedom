import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useMemo, useState } from "react";
import { AuthContextProps, UserData } from "../types/auth";
import { authService } from "../requests/authRequest";
import { TOKEN_KEY } from "../constants";
import { CreateUserWithProfile } from "../types/user";

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | undefined | null>(null);

  const LoginAcess = async (
    email: string,
    password: string
  ): Promise<UserData> => {
    try {
      const user = await authService.signIn(email, password);

      console.log("user:", user.email, user.token);

      if (!user.token) {
        throw new Error("Token nao definido");
      }

      await AsyncStorage.setItem(TOKEN_KEY, user.token);
      setUser(user);

      console.log("login realizado");
      return user;
    } catch (error) {
      console.error("Error no login");
      throw error;
    }
  };

  const createLogin = async (
    email: string,
    password: string,
    name: string,
    tel: string,
    cpf: string,
    age: number
  ): Promise<CreateUserWithProfile> => {
    try {
      const response = await authService.createUser(
        email,
        password,
        name,
        tel,
        cpf,
        age
      );

      console.log("response: ", response);

      console.log(response);

      if (!response.token) {
        throw new Error("Token não encontrado");
      }

      await AsyncStorage.setItem(TOKEN_KEY, response.token);

      return {
        email: response.user.email,
        password: response.user.password,
        ...response.profile,
      };
    } catch (error) {
      console.error("Error interno no servidor");
      throw error;
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      setUser(null);
      await AsyncStorage.removeItem(TOKEN_KEY);
      console.log("Logout realizado");
      console.log(TOKEN_KEY);
    } catch (error) {
      console.error(error);
    }
  };

  const AuthContextValue = useMemo(
    () => ({
      user,
      LoginAcess,
      signOut,
      createLogin,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

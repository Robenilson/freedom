import { CreateUserWithProfile } from "./user";

export interface UserData {
  email: string;
  token: string;
}

export interface AuthContextProps {
  user: UserData | null | undefined;

  LoginAcess: (email: string, password: string) => Promise<UserData>;

  createLogin: (
    email: string,
    password: string,
    name: string,
    tel: string,
    cpf: string,
    age: number
  ) => Promise<CreateUserWithProfile>;

  signOut: () => Promise<void>;
}

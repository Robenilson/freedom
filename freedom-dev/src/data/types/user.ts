export type UserProps = {
  id: string;
  email: string;
  password: string;
};

export type CreateUserWithProfile = {
  message: string;
  user: {
    id: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
  profile: {
    id: string;
    name: string;
    tel: string;
    age: number;
    sex: string | null;
    cpf: string;
    marital_status: string | null;
    userID: string;
  };
  token: string;
};

export type CreateLoginProps = {
  email: string;
  password: string;
  name: string;
  tel: string;
  cpf: string;
  age: number;
};

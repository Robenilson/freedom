export interface Profile {
  id: string;
  name: string;
  tel?: string | null;
  age?: number;
  sex?: string;
  cpf?: string;
  marital_status?: string | null;
  userID?: string;
}

export type CreateProfile = Omit<Profile, "id" | "userID">;

import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  isAdmin?: boolean | null;
  lastName?: string | null;
  password: string;
  photo?: InputJsonValue;
  roles: InputJsonValue;
  username: string;
};

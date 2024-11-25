import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isAdmin: boolean | null;
  lastName: string | null;
  photo: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

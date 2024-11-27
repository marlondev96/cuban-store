import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  isAdmin?: boolean | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  photo?: InputJsonValue;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};

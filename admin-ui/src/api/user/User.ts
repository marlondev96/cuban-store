import { Order } from "../order/Order";
import { JsonValue } from "type-fest";
import { Review } from "../review/Review";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isAdmin: boolean | null;
  lastName: string | null;
  orders?: Array<Order>;
  photo: JsonValue;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

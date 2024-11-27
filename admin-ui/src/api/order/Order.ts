import { Product } from "../product/Product";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  paymentIntent: boolean | null;
  paymentStatus: boolean | null;
  price: number | null;
  products?: Array<Product>;
  ship: string | null;
  shipDates: JsonValue;
  status: JsonValue;
  updatedAt: Date;
  user?: User | null;
};

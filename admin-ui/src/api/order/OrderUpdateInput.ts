import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  paymentIntent?: boolean | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  ship?: string | null;
  shipDates?: InputJsonValue;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};

import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  paymentIntent?: boolean | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  ship?: string | null;
  shipDates?: InputJsonValue;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};

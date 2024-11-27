import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  paymentIntent?: BooleanNullableFilter;
  paymentStatus?: BooleanNullableFilter;
  price?: FloatNullableFilter;
  products?: ProductListRelationFilter;
  ship?: StringNullableFilter;
  shipDates?: JsonFilter;
  status?: JsonFilter;
  user?: UserWhereUniqueInput;
};

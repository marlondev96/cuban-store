import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DiscountCupponWhereInput = {
  dateEnd?: DateTimeNullableFilter;
  dateStart?: DateTimeNullableFilter;
  discountByCantity?: DecimalNullableFilter;
  id?: StringFilter;
  percentDiscount?: DecimalNullableFilter;
  products?: ProductListRelationFilter;
  title?: StringNullableFilter;
};

import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type SubcategoryWhereInput = {
  categories?: CategoryWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
  subcategory?: SubcategoryWhereUniqueInput;
};

import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";
import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";

export type CategoryCreateInput = {
  name?: string | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
  subcategory?: SubcategoryWhereUniqueInput | null;
};

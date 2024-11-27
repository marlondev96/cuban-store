import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";
import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";

export type CategoryUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
  subcategory?: SubcategoryWhereUniqueInput | null;
};

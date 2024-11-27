import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProductCreateNestedManyWithoutSubcategoriesInput } from "./ProductCreateNestedManyWithoutSubcategoriesInput";

export type SubcategoryCreateInput = {
  categories?: CategoryWhereUniqueInput | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutSubcategoriesInput;
};

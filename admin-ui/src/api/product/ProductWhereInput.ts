import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DiscountCupponWhereUniqueInput } from "../discountCuppon/DiscountCupponWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  colors?: StringNullableFilter;
  description?: JsonFilter;
  discountCuppon?: DiscountCupponWhereUniqueInput;
  discountPrice?: FloatNullableFilter;
  id?: StringFilter;
  image1?: JsonFilter;
  image2?: JsonFilter;
  image3?: JsonFilter;
  images?: JsonFilter;
  order?: OrderWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
  subcategory?: SubcategoryWhereUniqueInput;
  title?: StringNullableFilter;
  titlePrice?: FloatNullableFilter;
};

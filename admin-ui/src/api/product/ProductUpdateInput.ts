import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { DiscountCupponWhereUniqueInput } from "../discountCuppon/DiscountCupponWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";
import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: string | null;
  description?: InputJsonValue;
  discountCuppon?: DiscountCupponWhereUniqueInput | null;
  discountPrice?: number | null;
  image1?: InputJsonValue;
  image2?: InputJsonValue;
  image3?: InputJsonValue;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  subcategory?: SubcategoryWhereUniqueInput | null;
  title?: string | null;
  titlePrice?: number | null;
};

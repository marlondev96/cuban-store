import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountCupponId?: SortOrder;
  discountPrice?: SortOrder;
  id?: SortOrder;
  image1?: SortOrder;
  image2?: SortOrder;
  image3?: SortOrder;
  images?: SortOrder;
  orderId?: SortOrder;
  subcategoryId?: SortOrder;
  title?: SortOrder;
  titlePrice?: SortOrder;
  updatedAt?: SortOrder;
};

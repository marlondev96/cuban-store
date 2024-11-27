import { SortOrder } from "../../util/SortOrder";

export type DiscountCupponOrderByInput = {
  createdAt?: SortOrder;
  dateEnd?: SortOrder;
  dateStart?: SortOrder;
  discountByCantity?: SortOrder;
  id?: SortOrder;
  percentDiscount?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

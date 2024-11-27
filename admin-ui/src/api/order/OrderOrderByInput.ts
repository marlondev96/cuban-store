import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentIntent?: SortOrder;
  paymentStatus?: SortOrder;
  price?: SortOrder;
  ship?: SortOrder;
  shipDates?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

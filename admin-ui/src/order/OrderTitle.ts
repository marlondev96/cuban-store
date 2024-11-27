import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "ship";

export const OrderTitle = (record: TOrder): string => {
  return record.ship?.toString() || String(record.id);
};

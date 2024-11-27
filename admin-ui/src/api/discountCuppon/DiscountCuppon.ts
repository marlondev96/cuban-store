import { Decimal } from "decimal.js";
import { Product } from "../product/Product";

export type DiscountCuppon = {
  createdAt: Date;
  dateEnd: Date | null;
  dateStart: Date | null;
  discountByCantity: Decimal | null;
  id: string;
  percentDiscount: Decimal | null;
  products?: Array<Product>;
  title: string | null;
  updatedAt: Date;
};

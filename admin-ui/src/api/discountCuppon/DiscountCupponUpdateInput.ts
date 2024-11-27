import { Decimal } from "decimal.js";
import { ProductUpdateManyWithoutDiscountCupponsInput } from "./ProductUpdateManyWithoutDiscountCupponsInput";

export type DiscountCupponUpdateInput = {
  dateEnd?: Date | null;
  dateStart?: Date | null;
  discountByCantity?: Decimal | null;
  percentDiscount?: Decimal | null;
  products?: ProductUpdateManyWithoutDiscountCupponsInput;
  title?: string | null;
};

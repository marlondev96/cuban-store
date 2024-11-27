import { Decimal } from "decimal.js";
import { ProductCreateNestedManyWithoutDiscountCupponsInput } from "./ProductCreateNestedManyWithoutDiscountCupponsInput";

export type DiscountCupponCreateInput = {
  dateEnd?: Date | null;
  dateStart?: Date | null;
  discountByCantity?: Decimal | null;
  percentDiscount?: Decimal | null;
  products?: ProductCreateNestedManyWithoutDiscountCupponsInput;
  title?: string | null;
};

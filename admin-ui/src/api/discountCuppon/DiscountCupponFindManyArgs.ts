import { DiscountCupponWhereInput } from "./DiscountCupponWhereInput";
import { DiscountCupponOrderByInput } from "./DiscountCupponOrderByInput";

export type DiscountCupponFindManyArgs = {
  where?: DiscountCupponWhereInput;
  orderBy?: Array<DiscountCupponOrderByInput>;
  skip?: number;
  take?: number;
};

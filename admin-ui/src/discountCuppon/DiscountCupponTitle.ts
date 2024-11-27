import { DiscountCuppon as TDiscountCuppon } from "../api/discountCuppon/DiscountCuppon";

export const DISCOUNTCUPPON_TITLE_FIELD = "title";

export const DiscountCupponTitle = (record: TDiscountCuppon): string => {
  return record.title?.toString() || String(record.id);
};

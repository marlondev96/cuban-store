import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { DiscountCuppon } from "../discountCuppon/DiscountCuppon";
import { Order } from "../order/Order";
import { Review } from "../review/Review";
import { Subcategory } from "../subcategory/Subcategory";

export type Product = {
  category?: Category | null;
  colors: string | null;
  createdAt: Date;
  description: JsonValue;
  discountCuppon?: DiscountCuppon | null;
  discountPrice: number | null;
  id: string;
  image1: JsonValue;
  image2: JsonValue;
  image3: JsonValue;
  images: JsonValue;
  order?: Order | null;
  reviews?: Array<Review>;
  subcategory?: Subcategory | null;
  title: string | null;
  titlePrice: number | null;
  updatedAt: Date;
};

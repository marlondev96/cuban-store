import { Category } from "../category/Category";
import { Product } from "../product/Product";

export type Subcategory = {
  categories?: Category | null;
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};

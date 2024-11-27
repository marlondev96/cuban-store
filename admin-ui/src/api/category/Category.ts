import { Product } from "../product/Product";
import { Subcategory } from "../subcategory/Subcategory";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  subcategory?: Subcategory | null;
  updatedAt: Date;
};

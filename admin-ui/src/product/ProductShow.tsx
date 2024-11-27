import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { DISCOUNTCUPPON_TITLE_FIELD } from "../discountCuppon/DiscountCupponTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { SUBCATEGORY_TITLE_FIELD } from "../subcategory/SubcategoryTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="categories"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="colors" source="colors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField
          label="discountCuppon"
          source="discountcuppon.id"
          reference="DiscountCuppon"
        >
          <TextField source={DISCOUNTCUPPON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="discountPrice" source="discountPrice" />
        <TextField label="ID" source="id" />
        <TextField label="image1" source="image1" />
        <TextField label="image2" source="image2" />
        <TextField label="image3" source="image3" />
        <TextField label="images" source="images" />
        <ReferenceField label="orders" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="subcategories"
          source="subcategory.id"
          reference="Subcategory"
        >
          <TextField source={SUBCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <TextField label="titlePrice" source="titlePrice" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Review"
          target="productId"
          label="reviews"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

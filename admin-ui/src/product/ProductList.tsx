import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { DISCOUNTCUPPON_TITLE_FIELD } from "../discountCuppon/DiscountCupponTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { SUBCATEGORY_TITLE_FIELD } from "../subcategory/SubcategoryTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

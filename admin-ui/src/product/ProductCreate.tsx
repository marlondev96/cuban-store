import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { DiscountCupponTitle } from "../discountCuppon/DiscountCupponTitle";
import { OrderTitle } from "../order/OrderTitle";
import { ReviewTitle } from "../review/ReviewTitle";
import { SubcategoryTitle } from "../subcategory/SubcategoryTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="categories"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="colors" source="colors" />
        <div />
        <ReferenceInput
          source="discountCuppon.id"
          reference="DiscountCuppon"
          label="discountCuppon"
        >
          <SelectInput optionText={DiscountCupponTitle} />
        </ReferenceInput>
        <NumberInput label="discountPrice" source="discountPrice" />
        <div />
        <div />
        <div />
        <div />
        <ReferenceInput source="order.id" reference="Order" label="orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="reviews" reference="Review">
          <SelectArrayInput
            optionText={ReviewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="subcategory.id"
          reference="Subcategory"
          label="subcategories"
        >
          <SelectInput optionText={SubcategoryTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <NumberInput label="titlePrice" source="titlePrice" />
      </SimpleForm>
    </Create>
  );
};

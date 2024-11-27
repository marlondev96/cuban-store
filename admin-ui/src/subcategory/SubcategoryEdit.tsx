import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { ProductTitle } from "../product/ProductTitle";

export const SubcategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="categories.id"
          reference="Category"
          label="categories"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="products" reference="Product">
          <SelectArrayInput
            optionText={ProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

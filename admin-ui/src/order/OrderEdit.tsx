import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="paymentIntent" source="paymentIntent" />
        <BooleanInput label="paymentStatus" source="paymentStatus" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput source="products" reference="Product">
          <SelectArrayInput
            optionText={ProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="ship" source="ship" />
        <div />
        <div />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

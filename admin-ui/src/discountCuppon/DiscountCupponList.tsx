import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DiscountCupponList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"discountCuppons"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateEnd" source="dateEnd" />
        <TextField label="dateStart" source="dateStart" />
        <TextField label="discountByCantity" source="discountByCantity" />
        <TextField label="ID" source="id" />
        <TextField label="percentDiscount" source="percentDiscount" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

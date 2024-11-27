import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { SubcategoryList } from "./subcategory/SubcategoryList";
import { SubcategoryCreate } from "./subcategory/SubcategoryCreate";
import { SubcategoryEdit } from "./subcategory/SubcategoryEdit";
import { SubcategoryShow } from "./subcategory/SubcategoryShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { DiscountCupponList } from "./discountCuppon/DiscountCupponList";
import { DiscountCupponCreate } from "./discountCuppon/DiscountCupponCreate";
import { DiscountCupponEdit } from "./discountCuppon/DiscountCupponEdit";
import { DiscountCupponShow } from "./discountCuppon/DiscountCupponShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"store"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Subcategory"
          list={SubcategoryList}
          edit={SubcategoryEdit}
          create={SubcategoryCreate}
          show={SubcategoryShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="DiscountCuppon"
          list={DiscountCupponList}
          edit={DiscountCupponEdit}
          create={DiscountCupponCreate}
          show={DiscountCupponShow}
        />
      </Admin>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Resellers from '../pages/Resellers'

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin/home" exact component={Dashboard} />
      <Route path="/admin/customers" exact component={Customers} />
      <Route path="/admin/products" exact component={Products} />
      <Route path="/admin/categories" exact component={Categories} />
      <Route path="/admin/resellers" exact component={Resellers} />
    </Switch>
  );
};
export default Routes;

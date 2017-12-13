import React from "react";
import { Switch, Route } from "react-router-dom";

import AddBookView from "./components/views/AddBookView.js";
import AuthView from "./components/views/AuthView.js";
import BookDetailsView from "./components/views/BookDetailsView.js";
import BookShelfView from "./components/views/BookShelfView.js";
import BrowsingView from "./components/views/BrowsingView.js";
import CheckoutView from "./components/views/CheckoutView.js";
import EditBookView from './components/views/EditBookView.js';

export default (
  <Switch>
    <Route path="/"    exact     component={AuthView}        />
    <Route path="/browsing"      component={BrowsingView}    />
    <Route path="/details/:id"   component={BookDetailsView} />
    <Route path="/addbook"       component={AddBookView}     />
    <Route path="/editbook/:id"  component={EditBookView}    />  
    <Route path="/bookshelf/:id" component={BookShelfView}   />
    <Route path="/checkout"      component={CheckoutView}    />
  </Switch>
);

import React from "react";

import { Route } from "react-router-dom/cjs/react-router-dom.min";

import CollectionsOverviewComponent from "../companents/collections-overview/collections-overview.component";

import CollectionPage from "./Collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route
      exact
      path={`${match.path}`}
      component={CollectionsOverviewComponent}
    />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;

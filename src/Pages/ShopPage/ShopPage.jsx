import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../Components/Collection-overview/collectionOverview";
import CollectionPage from "../Collection.Page/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

import React from "react";
import "./Collection-preview.styles.scss";
import CollectionItem from "../Collection-Item/Collection-Item.component";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({
  history,
  collection: { title, items, routeName },
}) => (
  <div className="collection-preview">
    <h1 className="title" onClick={() => history.push(`/shop/${routeName}`)}>
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} id={item.id} item={item} />
        ))}
    </div>
  </div>
);
export default withRouter(CollectionPreview);

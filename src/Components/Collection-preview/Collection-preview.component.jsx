import React from "react";
import "./Collection-preview.styles.scss";
import CollectionItem from "../Collection-Item/Collection-Item.component";


const CollectionPreview = ({ collection: { title, items } }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} id={item.id} item={item} />
        ))}
    </div>
  </div>
);
export default CollectionPreview;

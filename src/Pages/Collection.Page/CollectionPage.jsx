import React from "react";
import { connect } from "react-redux";

import "./collection.styles.scss";

import { selectCollection } from "../../redux/Shop/Shop.Selector";
import CollectionItem from "../../Components/Collection-Item/Collection-Item.component";

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

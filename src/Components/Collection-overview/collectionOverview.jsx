import React from "react";

import { selectCollections } from "../../redux/Shop/Shop.Selector";
import CollectionPreview from "../Collection-preview/Collection-preview.component";

import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((collection) => (
      <CollectionPreview key={collection.id} collection={collection} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(CollectionOverview);

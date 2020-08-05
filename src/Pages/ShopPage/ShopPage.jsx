import React from "react";
import SHOP_DATA from "./ShopData";
import CollectionPreview from "../../Components/Collection-preview/Collection-preview.component";

const ShopPage = () => {
  const collections = SHOP_DATA;
  return (
    <div className='shop'>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default ShopPage;

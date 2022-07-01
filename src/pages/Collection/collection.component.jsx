import React from "react";

//import collectionItemComponent from "../../companents/collection-item/collection-item.component";

import CollectionItem from "../../companents/collection-item/collection-item.component";

import "./collection.styles.scss";

import { connect } from "react-redux";

import { selectionCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectionCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

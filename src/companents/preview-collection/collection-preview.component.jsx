import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <a href={`shop/${routeName}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </a>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;

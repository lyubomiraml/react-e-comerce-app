import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, routeName, items, history, match }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.url}${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
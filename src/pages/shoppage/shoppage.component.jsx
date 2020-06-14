import React, { Component } from "react";
import "./shoppage.styles.scss";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { setCollections } from "../../redux/shop/shop.actions";

import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const transforemedCollections = convertCollectionsSnapshotToMap(snapshot);

      setCollections(transforemedCollections);
    });
  }

  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    return (
      <div className="shop">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCollections: (collections) => dispatch(setCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

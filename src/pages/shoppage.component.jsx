import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPageContainer from "../pages/Collection/collection.container";

import CollectionsOverviewContainer from "../companents/collections-overview/collection-overview.container";

import { fetchCollectionsStart } from "../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

// import React from "react";

// import { Route } from "react-router-dom/cjs/react-router-dom.min";

// import CollectionsOverviewComponent from "../companents/collections-overview/collections-overview.component";

// import CollectionPage from "./Collection/collection.component";

// import { connect } from "react-redux";

// import { updateCollections } from "../redux/shop/shop.actions";

// import WithSpinner from "../companents/with-spinner/with-spinner.component";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../firebase/firebase.utils";

// const CollectionsOverviewComponentWithSpinner = WithSpinner(
//   CollectionsOverviewComponent
// );
// const CollectionsPagetWithSpinner = WithSpinner(CollectionPage);

// class ShopPage extends React.Component {
//   state = {
//     loading: true,
//   };

//   unsubscribeFromSnapshot = null;

//   componentDidMount() {
//     const { updateCollections } = this.props;
//     const collectionRef = firestore.collection("collections");
//     this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       updateCollections(collectionsMap);
//       this.setState({ loading: false });
//     });
//   }

//   render() {
//     const { match } = this.props;
//     const { loading } = this.props;

//     return (
//       <div className="shop-page">
//         <Route
//           exact
//           path={`${match.path}`}
//           render={props => (
//             <CollectionsOverviewComponentWithSpinner
//               isLoading={loading}
//               {...props}
//             />
//           )}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           render={props => (
//             <CollectionsPagetWithSpinner isLoading={loading} {...props} />
//           )}
//         />
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap =>
//     dispatch(updateCollections(collectionsMap)),
// });

// export default connect(null, mapDispatchToProps)(ShopPage);

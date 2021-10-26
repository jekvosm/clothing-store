import React from 'react'
import { Route } from 'react-router'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Route } from 'react-router'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionID`}
        component={CollectionPageContainer}
      />
    </div>
  )
}

export default ShopPage

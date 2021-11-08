import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectiosForPreview = createSelector(
  [selectShopCollections],
  collections => (collections ? Object.values(collections) : [])
)

export const selectCollection = memoize(collectionUrlParam =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  )
)
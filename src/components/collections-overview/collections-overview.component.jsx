import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollectiosForPreview } from '../../redux/shop/shop.selecters'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { CollectionsOverviewContainer } from './collections-overview.styles'

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectiosForPreview)
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />
      })}
    </CollectionsOverviewContainer>
  )
}

export default CollectionsOverview

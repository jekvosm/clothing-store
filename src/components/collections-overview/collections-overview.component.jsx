import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectiosForPreview } from '../../redux/shop/shop.selecters'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />
    })}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectiosForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)

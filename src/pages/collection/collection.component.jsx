import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selecters'
import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.style.scss'

const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection
  console.log(match)
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state),
})

export default connect(mapStateToProps)(CollectionPage)

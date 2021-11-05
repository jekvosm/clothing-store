import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selecters'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {
  CollectionPageContainer,
  ItemsContainer,
  TitleContainer,
} from './collection.styles'

// import './collection.style.scss'

const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection
  console.log(match)
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state),
})

export default connect(mapStateToProps)(CollectionPage)

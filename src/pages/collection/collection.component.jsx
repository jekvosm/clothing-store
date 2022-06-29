import React from 'react'

import { useSelector } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selecters'

import { useParams } from 'react-router-dom'

import CollectionItem from '../../components/collection-item/collection-item.component'

import {
  CollectionPageContainer,
  ItemsContainer,
  TitleContainer,
} from './collection.styles'

const CollectionPage = () => {
  const { collectionID } = useParams()
  const collection = useSelector(selectCollection(collectionID))
  const { title, items } = collection

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

export default CollectionPage

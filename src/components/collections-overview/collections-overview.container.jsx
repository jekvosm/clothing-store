import { compose } from 'redux'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selecters'

import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer

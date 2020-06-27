import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector'
import WithSpinner from '../../ui/with-spinner/withSpinner'
import Collection from './Collection'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)

export default CollectionContainer

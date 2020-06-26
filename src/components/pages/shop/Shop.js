import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../ui/collections-overview/CollectionsOverview'
import Collection from '../collection/Collection'
import { updateCollections } from '../../redux/shop/shopActions'
import WithSpinner from '../../ui/with-spinner/withSpinner'
import {
  db,
  convertCollectionsSnapshotToMap
} from '../../../firebase/firebaseUtils'

import './Shop.scss'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionWithSpinner = WithSpinner(Collection)

class Shop extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  unsubscribeFromSnapshot = null

  componentDidMount () {
    const { updateCollections } = this.props
    const collectionRef = db.collection('collections')

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render () {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)

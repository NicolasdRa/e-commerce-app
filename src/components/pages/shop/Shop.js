import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import CollectionsOverviewContainer from '../../ui/collections-overview/CollectionsOverviewContainer'
import CollectionContainer from '../collection/CollectionContainer'
import { fetchCollectionsAsync } from '../../redux/shop/shopActions'

import './Shop.scss'

class Shop extends Component {
  componentDidMount () {
    const { fetchCollectionsAsync } = this.props
    fetchCollectionsAsync()
  }

  render () {
    const { match } = this.props

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
        <Route />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

export default connect(null, mapDispatchToProps)(Shop)

import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../ui/collections-overview/CollectionsOverview'
import Collection from '../collection/Collection'

import './Shop.scss'

const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
      <Route />
    </div>
  )
}

export default Shop

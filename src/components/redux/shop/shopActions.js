import ShopTypes from './shopTypes'

export const updateCollections = collectionsMap => ({
  type: ShopTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
})

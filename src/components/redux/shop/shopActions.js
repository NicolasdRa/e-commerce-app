import ShopTypes from './shopTypes'
import {
  db,
  convertCollectionsSnapshotToMap
} from '../../../firebase/firebaseUtils'

export const fetchCollectionsStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsAsync = () => {
  return dispatch => {
    const collectionRef = db.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}

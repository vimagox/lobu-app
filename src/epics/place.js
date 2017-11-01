import * as types from '../constants/ActionTypes'
import {place, region} from '../actions'

export const regionsEpic = action$ =>
  action$.ofType(types.SET_REGIONS)
    .mergeMap(action =>
       place.loadBusinesses()
    )

export const regionEpic = action$ =>
  action$.ofType(types.SET_REGION)
    .mergeMap(action =>
       region.loadCities(action.region)
    )

export const citiesEpic = (action$, store) =>
  action$.ofType(types.SET_CITIES)
    .mergeMap(action =>
       place.loadBusinesses(store.place.region)
    )

export const cityEpic = (action$, store) =>
  action$.ofType(types.SET_CITY)
    .mergeMap(action =>
       place.loadBusinesses(store.place.region, action.city)
    )

    // .delay(1000) // Asynchronously wait 1000ms then continue
    // .mapTo({ type: types.SET_BUSINESSES });


// import { ajax } from 'rxjs/observable/dom/ajax';
//
// const fetchUserEpic = (action$, store) =>
//   action$.ofType(types.SET_REGION)
//     .mergeMap(({ payload }) =>
//         ajax.getJSON(`/api/users/${payload}`)
//             .map(response => ({
//               type: 'FETCH_USER_FULFILLED',
//               payload: response
//             }))
//         );

import * as types from '../constants/ActionTypes'
import {country} from '../actions'

export const bannerEpic = action$ =>
  action$.ofType(types.HIDE_BANNER)
    .mergeMap(action =>
      country.loadRegions()
    )

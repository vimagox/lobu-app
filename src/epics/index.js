import 'rxjs'
import {combineEpics} from 'redux-observable'
import {bannerEpic} from './home'
import {regionsEpic, regionEpic, citiesEpic, cityEpic} from './place'

export const epics = combineEpics(
  bannerEpic,
  regionsEpic,
  regionEpic,
  citiesEpic,  
)

// cityEpic

import { systemReducer } from './system/reducers'
import { combineReducers } from 'redux'

// combine all reducers
export const rootReducer = combineReducers({
  system: systemReducer
})

export type RootState = ReturnType<typeof rootReducer>
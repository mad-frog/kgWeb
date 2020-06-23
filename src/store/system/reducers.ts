import { SystemState, Themes, SystemActionTypes, TOOGLE_THEME } from './types'

const initialState: SystemState = {
  theme: Themes.DARK
}

export function systemReducer(state = initialState, action: SystemActionTypes): SystemState {
  switch (action.type) {
    case TOOGLE_THEME:
      return {
        theme: action.meta.theme
      }
    default:
      return state
  }
}
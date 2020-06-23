import { TOOGLE_THEME, Themes, SystemActionTypes } from './types'

export function toogleTheme(theme: Themes): SystemActionTypes {
  return {
    type: TOOGLE_THEME,
    meta: { theme: theme }
  }
}
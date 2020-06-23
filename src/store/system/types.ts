export const TOOGLE_THEME = 'TOOGLE_THEME'

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface SystemState {
  theme: Themes
}


interface ToogleThemeAction {
  type: typeof TOOGLE_THEME
  meta: { theme: Themes }
}

export type SystemActionTypes = ToogleThemeAction



import 'styled-components'
import { darkTheme } from '../styles/themes/dark/dark'
import { lightTheme } from '../styles/themes/light/light'

type LightThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends LightThemeType { }
}

type DarkThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DarkThemeType { }
}

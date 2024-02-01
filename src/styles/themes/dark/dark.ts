import background from '../../../assets/images/macOs-ventura-dark-1480x1480.jpeg'
import mobileBackground from '../../../assets/images/Deep-Purple-iPhone-14-Stock-Pro-Wallpaper-iPhone-14-pro-max.jpg'
import { WindowControls } from '../components/windowControls'

import { systemSettingsDarkColorPallete } from './apps/systemSettingsDarkColorPallete'
import { weatherDarkColorPallete } from './apps/weatherDarkColorPallete'
import { ToggleDarkColorPallete } from './components/toggleDark'
import { ButtonDarkColorPallete } from './components/buttonDark'

export const darkTheme = {
  title: 'dark',
  colors: {
    primary: '#000',
    secondary: 'rgba(215, 213, 213, 0.876)',
    buttonFocus: 'rgba(255, 255, 255, 0.2)',
    menuBar: '#2c2b2ba0',
    font: '#ffffff',
    mobileBackground: '#282828',
    mobileBackgroundImg: mobileBackground,
    menubar: {
      disabled: '#b5b5b5c2',
      border: '#c1c1c12d',
      separator: '#c1c1c12d',
    },
    dock: {
      background: '#ffffff10',
      border: '#5252525e',
      internalBoxShadow: 'white',
      boxShadow: 'black',
      iconLabel: '#ffffff1f',
    },
  },
  splash: {
    background: 'black',
    icon: '#fff',
    loadbar: 'rgba(40, 40, 40, 0.983)',
    loadbarProgress: 'rgba(215, 213, 213, 0.876)',
  },
  backgroundUrl: background,
  windowControls: WindowControls,
  toggle: ToggleDarkColorPallete,
  button: ButtonDarkColorPallete,
  apps: {
    weather: weatherDarkColorPallete,
    systemSettings: systemSettingsDarkColorPallete,
  },
  secondaryMainColor: '#1662d9',
}

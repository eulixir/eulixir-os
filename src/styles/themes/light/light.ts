import background from '../../../assets/images/macOs-ventura-light.jpg'
import mobileBackground from '../../../assets/images/Deep-Purple-iPhone-14-Stock-Pro-Wallpaper-iPhone-14-pro-max.jpg'
import { WindowControls } from '../components/windowControls'
import { systemSettingsLightColorPallete } from './apps/systemSettingsWhiteColorPallete'
import { weatherLigthColorPallete } from './apps/weatherLightColorPallete'
import { ToggleColorPallete } from '../components/toggle'

export const lightTheme = {
  title: 'light',
  colors: {
    primary: '#fff',
    secondary: '#282828',
    menuBar: '#ffffff6c',
    font: '#000',
    buttonFocus: '#1c1c1c2d',
    mobileBackground: '#282828',
    mobileBackgroundImg: mobileBackground,
    menubar: {
      disabled: '#ffffff1f',
      border: '#c1c1c12d',
      separator: '#ffffff1f',
    },
    dock: {
      background: '#c1c1c152',
      border: '#bcbcbc5e',
      internalBoxShadow: '#c8c8c89d',
      boxShadow: '#4d4d4d9d',
      iconLabel: '#ffffff1f',
    },
  },
  splash: {
    background: '#C6C6C6',
    icon: '#282828',
    loadbar: '#b2b2b2',
    loadbarProgress: '#282828',
  },
  backgroundUrl: background,
  windowControls: WindowControls,
  toggle: ToggleColorPallete,
  apps: {
    weather: weatherLigthColorPallete,
    systemSettings: systemSettingsLightColorPallete,
  },
  secondaryMainColor: '#2564c3',
}

import background from '../../assets/images/macOs-ventura-light.jpg'
import mobileBackground from '../../assets/images/Deep-Purple-iPhone-14-Stock-Pro-Wallpaper-iPhone-14-pro-max.jpg'

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
}

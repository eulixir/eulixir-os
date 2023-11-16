import background from '../../assets/images/macOs-ventura-dark-1480x1480.jpeg'
import mobileBackground from '../../assets/images/Deep-Purple-iPhone-14-Stock-Pro-Wallpaper-iPhone-14-pro-max.jpg'

export const darkTheme = {
  title: 'dark',
  colors: {
    primary: '#000',
    secondary: 'rgba(215, 213, 213, 0.876)',
    buttonFocus: 'rgba(255, 255, 255, 0.2)',
    menuBar: '#0000006b',
    font: '#ffffff',
    mobileBackground: '#282828',
    mobileBackgroundImg: mobileBackground,
    menubar: {
      disabled: '#b5b5b5c2',
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
  windowControls: {
    closeButton: '#FF6157',
    minimizeButton: '#FFC12F',
    maximizeButton: '#2ACB42',
    titleColor: 'rgba(255, 255, 255, 0.55)',
  },
}

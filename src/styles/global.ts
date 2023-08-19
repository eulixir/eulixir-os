import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  background-image: url(${({ theme }) => theme.backgroundUrl});
   
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
`

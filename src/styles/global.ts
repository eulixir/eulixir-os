import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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

import { createGlobalStyle } from 'styled-components'

    const GlobalStyle = createGlobalStyle`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Montserrat', sans-serif;
        line-height: 1.6;
        background-color: #f4f4f4;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `

    export default GlobalStyle

import {createGlobalStyle} from 'styled-components'

 const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
    }
    body {
        
        font-size:1.15em;
        margin:0;
    }

    p {
        color:wheat;
        opacity: 0.6;
        line-height: 1.5;
      }
      img {
        max-width: 100%;
    }
`
export default GlobalStyle
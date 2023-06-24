import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; line-height: normal;
  }
  :root {

  /* fonts */
  --font-inter: Inter;

  /* font sizes */
  --font-size-16xl: 35px;
  --font-size-7xl: 26px;

  /* Colors */
  --color-darkslategray: #044569;
  --color-white: #fff;
  --color-steelblue: #03527e;

  /* border radiuses */
  --br-6xs: 7px;

}
`
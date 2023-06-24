import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; line-height: normal;
  }
:root {

/* fonts */
--font-inter: Inter;

/* font sizes */
--font-size-7xl: 26px;
--font-size-2xs: 11px;
--font-size-base: 16px;
--font-size-16xl: 35px;

/* Colors */
--color-darkslategray: #044569;
--color-steelblue: #03527e;
--color-white: #fff;
--color-black: #000;

/* border radiuses */
--br-6xs: 7px;
--br-8xs: 5px;

}
`
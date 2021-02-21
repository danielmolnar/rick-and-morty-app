import { createGlobalStyle } from 'styled-components';
import wallpaper from './wallpaper.jpg';
import schwifty from './font/schwifty.ttf';
export default createGlobalStyle`

*{
  box-sizing: border-box;
 
}


body {
  margin: 0;
  background-image: url(${wallpaper});


}

@font-face { 
  font-family: schwifty; 
  src: url(${schwifty}) format('truetype');
  font-weight: normal;
  font-style: normal;
  }

  h2 {
    font-family: get-schwifty, Helvetica, Arial, sans-serif;;
  }

`;

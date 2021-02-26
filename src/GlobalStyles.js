import { createGlobalStyle } from 'styled-components';
import wallpaper from './img/wallpaper.jpg';
export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box; 
}


body {
  margin: 0;
  background-image: url(${wallpaper});


}


  h2 {
    font-family: sans-serif;
    font-size: 2rem;
  }

p {
  font-size: 1rem;
}


`;

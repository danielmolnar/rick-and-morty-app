import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
  box-sizing: border-box; 
  font-size: 16px;
}

:root {
  --ff-primary: "Open Sans", sans-serif;
  --fc-primary: white;
  --clr-bg: rgb(4,165,186);
  --clr-bg-rad: radial-gradient(circle, rgba(4,165,186,1) 23%, rgba(203,235,1,1) 67%, rgba(48,142,10,1) 95%);
  --clr-bg-checkb: rgba(4, 165, 186, 1);
  --clr-button-rad: linear-gradient(
      to right,
      #16a085 0%,
      #f4d03f 51%,
      #16a085 100%
    );
  --clr-bg-opac: rgba(48, 142, 10, 0.3);
  --clr-span-pri: #828080;
  --clr-span-sec: #fff;
  --bs: 5px 5px 10px rgba(0, 0, 0, 0.5);
  --bs2: 0px 1px 3px #111;
}

body {
  margin: 0;
  font-family:var(--ff-primary);
  background: var(--clr-bg);
  background: var(--clr-bg-rad);
  background-size: cover;
  height: 100vh;
}
`;

import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    margin: 0;
    padding: 0;
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.fadeout-short {animation: fadeOut 0.3s linear forwards;}
.fadeout-medium {animation: fadeOut 1s linear forwards;}
.fadeout-long {animation: fadeOut 3s linear forwards;}

`;

export default GlobalStyles;

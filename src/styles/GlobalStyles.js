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

.fadeout-short {animation: fadeOut 0.3s ease-out 0.2s forwards;}
.fadeout-medium {animation: fadeOut 1s ease-out 0.2s forwards;}
.fadeout-long {animation: fadeOut 3s ease-out 0.2s forwards;}

`;

export default GlobalStyles;

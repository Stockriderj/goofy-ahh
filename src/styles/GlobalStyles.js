import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    /* Gray */
  --color-gray-0: #fff;
  --color-gray-50: #f9fafb;
  --color-gray-100: #FAFBFC; // changed
  --color-gray-200: #eaeaea; // changed
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #B0B8BE; // changed
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-black: #000;
}

*::selection {
    background: none;
}

body {
    margin: 0;
    padding: 0;
    cursor: pointer;
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

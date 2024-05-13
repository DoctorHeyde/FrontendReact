import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    // Purple
    --color-purple-50: #faf5ff;
    --color-purple-100: #f3e8ff;
    --color-purple-200: #e9d5ff;
    --color-purple-300: #d8b4fe;
    --color-purple-400: #c084fc;
    --color-purple-500: #a855f7;
    --color-purple-600: #7c3aed;
    --color-purple-700: #6d28d9;
    --color-purple-800: #5b21b6;
    --color-purple-900: #4c1d95;
    --color-purple-950: #2e1065;

    // Gray
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto Condensed', 'sans-serif';
}
`;

export default GlobalStyles;
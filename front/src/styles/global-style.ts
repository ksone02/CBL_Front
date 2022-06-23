import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    .material-icons.brown {
        color: #796958;
    }

    * {
        margin: 0;
    }
    
    li {
        list-style: none;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }

    .line {
        width: 1237px;
        height: 1px;
        background-color: #ecd9b2;
    }
`;

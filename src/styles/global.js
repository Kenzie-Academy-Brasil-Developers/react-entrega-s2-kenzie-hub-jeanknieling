import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --gray-0: #F8F9FA;
        --gray-1: #868E96;
        --gray-2: #343B41;
        --gray-3: #212529;
        --gray-4: #121214;

        --sucess: #3FE864;
        --error: #E83F5B;
    }

    body {
        background-color: var(--gray-4);
        color: var(--gray-0);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    body, input, button {
        font-family: 'Inter', Helvetica, sans-serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        text-align: center;
        font-weight: 700;
    }

    button, input, a, label {
        cursor: pointer;
    }

    a { 
        text-decoration: none;
    }

`;
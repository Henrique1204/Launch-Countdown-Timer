import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap");

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
        color: inherit;
        outline: none;
    }

    html {
        /* Compensar media rem pra 1rem = 10px */
        font-size: 62.5%;
        font-family: "Red Hat Text", sans-serif;
        font-weight: 700;
    }

    ul, li {
        list-style: none;
    }

    img {
        width: 100%;
        max-width: 100%;
        display: block;
    }

    body {
        min-height: 100vh;
        background: url('./imagens/pattern-hills.svg') no-repeat bottom , url('./imagens/bg-stars.svg') no-repeat top;
        background-size: 100%;
        background-color: ${({ theme }) => theme.cores.bgAzulEscuro};
        display: flex;
    }

    #root {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    main {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(4, 148px);
        gap: 10.4rem 3.2rem;
        justify-content: center;
    }
`;

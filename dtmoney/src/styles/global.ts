import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #2937cc;
        --blue-light: #29a1cc;
        --orange: #ff512f;
        --orange-light: #f09819;
        --gray-dark: #121214;
        --gray-light: #202024;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
        --inputBackground: #e7e9ee;
        --inputBorder: #d7d7d7;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay { 
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 1rem;
        position: relative;
        border-radius: 0.5rem;

        @media(min-width: 768px) {
            padding: 3rem;
        }
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`
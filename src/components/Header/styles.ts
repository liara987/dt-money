import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding:  0 1rem;
        border-radius: 0.25rem;
        font-size: 0.6rem;
        height: 2rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media(min-width: 768px) {
        padding: 2rem 1rem 12rem;

        button {
            height: 3rem;
            font-size: 1rem;
            padding:  0 2rem;
        }
    }
`


import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-top: -5rem;

    div {
        background: var(--shape);
        padding: 1.5rem 1rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 500;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }

    @media(min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: -10rem;
    }
`
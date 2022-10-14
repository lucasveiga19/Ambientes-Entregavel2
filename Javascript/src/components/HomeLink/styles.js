import styled from 'styled-components'

export const Button = styled.div`
    padding: 0.7rem;
    background: rgb(0,0,0);
    color: rgb(0, 102, 102);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    position: absolute;
    bottom: calc(1% + 4rem);
    left: calc(100% - 8rem);
    opacity: .9;
    cursor: pointer;

    transition: 400ms;
    &:hover{
        opacity: .6;
    }

    @media(max-width:600px){
        bottom: calc(1vh + 1.5rem);
        left: calc(100vw - 4.25rem);
    }
`
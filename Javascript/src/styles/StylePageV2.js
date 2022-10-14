import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: 2rem;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;
`

export const Title = styled.h1`
    font-size: 2.5rem;
`

export const SubTitle = styled.h1`
    font-size: 1rem;
    font-weight: 100;
    font-style: italic;
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
` 

export const Input = styled.input`
    width: 320px;
    max-width: 50vw;
    padding: .6rem;
    border: none;
    border-radius: 6px;
    text-align: center;

    &:focus{
        outline: none;
    }
`

export const Button = styled.button`
    width: 180px;
    max-width: 60vw;
    padding: .8rem;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    background: var(--orange);
    color: var(--white);
    cursor: pointer;

    &:focus{
        outline: none;
    }

    transition: 400ms;
    &:hover{
        transform: scale(1.05);
    }
`

export const Result = styled.h1`
    b{
        color: var(--green-ligth);
    }
`

export const Error = styled.h1`
    color: var(--red);
`
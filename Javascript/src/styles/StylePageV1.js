import styled from 'styled-components'

export const Main = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: 2rem;
`

export const Title = styled.h1`
    font-size: 2.5rem;
    @media(max-width: 550px){
        font-size: 1.25rem;
    } 
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
    width: 120px;
    max-width: 50vw;
    padding: .6rem;
    border: none;
    border-radius: 6px;
    text-align: center;

    &:focus{
        outline: none;
    }
`

export const RowInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`
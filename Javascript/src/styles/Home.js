import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    justify-content: flex-start;
    background: rgb(0, 102, 102);
    text-align: center;
`

export const Header = styled.header`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;
`

export const Title = styled.h1`
    font-size: 4.5rem;

    @media(max-width: 550px){
        font-size: 3.25rem;
    }   

    b{
        color: rgb(0,0,0);
    }
`

export const SubTitle = styled.p`
    font-size: .85rem;
`

export const CardContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    
`
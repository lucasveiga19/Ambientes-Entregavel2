import styled from 'styled-components'

export const Main = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: rgb(0, 102, 102);
    color: rgb(0,0,0);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3.25rem;
`

export const Header = styled.header`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: .2rem;   
`

export const Title = styled.h1`
    font-size: 3.75rem;
    color: rgb(46, 139, 87);
`

export const Subtitle = styled.p`
    font-size: 1rem;
    font-style: italic;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

import styled from "styled-components";

export const CardMain = styled.div`
    width: 280px;
    background: rgb(46, 139, 87);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    gap: .50rem;
    border-radius: 30px;
    cursor: pointer;

    overflow-y: hidden;
    text-overflow: ellipsis;

    transition: 400ms;
    &:hover{
        transform: scale(1.05);
    }
`

export const Title = styled.h1`
    color: rgb(0,0,0);
    font-size: 1.8rem;
    font-weight: 600;
`